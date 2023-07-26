import { Logger } from "../logger";
import { WinBox } from "../utils/winbox/winbox";
import { computePosition, flip, offset, shift } from "@floating-ui/dom";
import "./previewr.css";

const iframeName = "essentialkit_calc_frame";

// This class is responsible to loading/reloading/unloading the angular app into the UI.
export class Previewr {
  logger = new Logger("previewr");
  dialog?: WinBox;
  url?: URL;

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
    document.addEventListener("keydown", this.onEscHandler)
  }

  listenForCspError() {
    document.addEventListener("securitypolicyviolation", (e) => {
      if (window.name !== iframeName) {
        return;
      }
      this.logger.error("CSP error", e, e.blockedURI);
    });
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
      case "toggle-calculator":
        try {
          let newUrl = new URL(`chrome-extension://${chrome.i18n.getMessage("@@extension_id")}/standalone/calc.html`);
          if (newUrl.href === this.url?.href) {
            this.logger.warn("Ignoring update of same URL", newUrl.href);
            return;
          }
          this.url = newUrl;
          this.previewUrl(newUrl, message.point);
          return;
        } catch (e) {
          this.logger.log("Error creating url: ", e);
        }
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
      this.dialog.setUrl(url.href);
      this.dialog.move(winboxOptions.x, winboxOptions.y, /* skipUpdate= */false);
    }

    this.dialog?.show();
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
      height: "375px",
      autosize: false,
      class: ["no-max", "no-full", "no-min", "no-resize", "no-move"],
      index: await this.getMaxZIndex(),
      // Simply updating the url without changing the iframe, means the content-script doesn't get re-inserted into the frame, even though it's now out of context.
      html: `<iframe name="${iframeName}" src="${url}"></iframe>`,
      // url: url.href, // Update restore when you update this.
      hidden: true,
      shadowel: "floating-calculator-preview-window",
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
