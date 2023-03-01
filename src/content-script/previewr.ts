import { Logger } from "../logger";
import { WinBox } from "../utils/winbox/winbox";
import { computePosition, flip, offset, shift } from "@floating-ui/dom";
import "./previewr.css";
import { getEngineConfig } from "./search-engine";

const iframeName = "essentialkit_dict_frame";
// Export the dialog dom
WinBox.prototype.getDom = function () {
  return this.dom;
};

WinBox.prototype.startLoading = function () {
  this.dom.querySelector(".loading").style.display = "block";
};
WinBox.prototype.stopLoading = function () {
  this.dom.querySelector(".loading").style.display = "none";
};

// This class is responsible to loading/reloading/unloading the angular app into the UI.
export class Previewr {
  logger = new Logger("previewr");
  dialog?: WinBox;
  url?: URL;
  engineConfig = getEngineConfig();

  /* This function inserts an Angular custom element (web component) into the DOM. */
  init() {
    if (this.inIframe()) {
      this.logger.debug(
        "Not inserting previewr in iframe: ",
        window.location.href
      );
      return;
    }

    this.listenForCspError();
    this.listenForWindowMessages();
  }

  listenForCspError() {
    document.addEventListener("securitypolicyviolation", (e) => {
      if (window.name !== iframeName) {
        return;
      }
      this.logger.error("CSP error", e, e.blockedURI);
    });
  }

  listenForWindowMessages() {
    window.addEventListener("message", this.onMessageHandler, false);
    document.onkeydown = this.onEscHandler;
  }

  onMessageHandler = (event) => {
    if (event.origin !== window.location.origin) {
      this.logger.debug(
        "Ignoring message from different origin",
        event.origin,
        event.data
      );
      return;
    }

    if (event.data.application !== "floating-calculator") {
      this.logger.debug(
        "Ignoring origin messsage not initiated by Better Previews"
      );
      return;
    }

    this.handleMessage(event.data);
  }

  onEscHandler = (evt) => {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
      isEscape = evt.key === "Escape" || evt.key === "Esc";
    } else {
      isEscape = evt.keyCode === 27;
    }
    if (isEscape) {
      this.handleMessage({
        action: "escape",
        href: document.location.href,
        sourceFrame: iframeName,
      });
    }
  }

  async handleMessage(message) {
    this.logger.debug("#handleMessage: ", message);
    switch (message.action) {
      case "define":
      case "verbose-define":
      case "toggle-calculator":
        try {
          let newUrl = new URL(this.engineConfig["url"](message.data));
          if (newUrl.href === this.url?.href) {
            this.logger.warn("Ignoring update of same URL", newUrl.href);
            return;
          }
          this.url = newUrl;
          if (this.dialog) {
            this.dialog.startLoading();
          }
          this.previewUrl(newUrl, message.point);
          return;
        } catch (e) {
          this.logger.log("Error creating url: ", e);
        }
        break;
      case "loaded-and-cleaned":
        // TODO: Reset to actual URL in case of internal navigation within iframe.
        // this.url = new URL(message.href);
        this.dialog?.show();
        this.dialog?.stopLoading();
        break;
      case "loaded-and-no-def":
        // TODO: If verbose-define, show NO definition found.
        this.dialog?.close();
        break;
      case "unload":
        this.dialog?.startLoading();
        break;
      case "escape":
        this.dialog?.close();
        break;
      default:
        this.logger.warn("Unhandled action: ", message.action);
        break;
    }
  }

  async previewUrl(url: URL, point?: DOMRect) {
    this.logger.log("#previewUrl: ", url);
    const winboxOptions = await this.getWinboxOptions(url, point);

    if (!this.dialog) {
      this.logger.debug("creating new dialog with options", winboxOptions);
      this.dialog = new WinBox(chrome.i18n.getMessage("appName"), winboxOptions);
    } else {
      this.logger.debug("restoring dialog");

      // TODO: Also reset html to ensure load is fired.
      this.dialog.setUrl(url.href);
      this.dialog.move(winboxOptions.x, winboxOptions.y, /* skipUpdate= */false);
    }

    // TODO: Periodically check and update the z-index.
  }

  async getWinboxOptions(url: URL, point?: DOMRect) {
    let pos = { x: 0, y: 0, placement: "top" };
    if (point) {
      pos = await this.getPos(point!);
    }
    return {
      icon: chrome.runtime.getURL("assets/logo-24x24.png"),
      x: pos.x,
      y: pos.y,
      width: "655px",
      height: "335px",
      autosize: false,
      class: ["no-max", "no-full", "no-min", "no-resize", "no-move"],
      index: await this.getMaxZIndex(),
      // Simply updating the url without changing the iframe, means the content-script doesn't get re-inserted into the frame, even though it's now out of context.
      html: `<iframe name="${iframeName}" src="${url}"></iframe><div class="loading"><span class="bar-animation"></span></div> `,
      // url: url.href, // Update restore when you update this.
      hidden: true,
      shadowel: "floating-calculator-preview-window",
      cssurl: chrome.runtime.getURL("content-script/winbox.css"),
      framename: iframeName,

      onclose: () => {
        this.url = undefined;
        this.dialog = undefined;
        document.querySelectorAll("floating-calculator-preview-window")?.forEach(e => e.remove());
      },
    };
  }

  /*
   * Returns true if this script is running inside an iframe,
   * since the content script is added to all frames.
   */
  inIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  getMaxZIndex() {
    return new Promise((resolve: (arg0: number) => void) => {
      const z = Math.max(
        ...Array.from(document.querySelectorAll("body *"), (el) =>
          parseFloat(window.getComputedStyle(el).zIndex)
        ).filter((zIndex) => !Number.isNaN(zIndex)),
        0
      );
      resolve(z);
    });
  }

  async getPos(rect: DOMRect) {
    const virtualEl = {
      getBoundingClientRect() {
        return rect;
      },
    };
    const div = document.createElement("div");
    // These dimensions need to match that of the dialog precisely.
    div.style.width = "655px";
    div.style.height = "335px";
    div.style.position = "fixed";
    div.style.visibility = "hidden";
    document.body.appendChild(div);
    return computePosition(virtualEl, div, {
      placement: "top",
      strategy: "fixed", // If you use "fixed", x, y would change to clientX/Y.
      middleware: [
        offset(12), // Space between mouse and tooltip.
        flip(),
        shift({ padding: 5 }), // Space from the edge of the browser.
      ],
    }).then(({ x, y, placement, middlewareData }) => {
      return {
        x: x,
        y: y,
        placement: placement,
      };
    });
  }
}
