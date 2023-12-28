import { Logger } from "../utils/logger";
import { WinBox } from "../utils/winbox/winbox";
import { computePosition, flip, offset, shift } from "@floating-ui/dom";
import "./previewr.css";
import "../utils/feedback/feedback";
import { FeedbackData } from "../background-script/feedback-checker";
import { FEEDBACK_DATA_KEY } from "../utils/storage";
import Storage from "../utils/storage";
import Analytics from "../utils/analytics";

const iframeName = "essentialkit_calc_frame";
const apis = {
  default: {
    i18n: chrome?.i18n?.getMessage,
    link: chrome?.runtime?.getURL,
    standaloneLink: () => chrome?.runtime?.getURL("standalone/calc.html"),
  },
  demo: {
    // welcome page demo.
    i18n: (x, y) => (x === "appName" ? "Floating Calculator" : x),
    link: (path) => {
      if (window.location.protocol === "chrome-extension:") {
        return chrome.runtime.getURL(path);
      } else if (window.location.host === "127.0.0.1:3000") {
        return "http://127.0.0.1:3000/build/chrome-dev/" + path;
      }
      console.error("Invalid path");
      return "";
    },
    standaloneLink: () => {
      if (window.location.protocol === "chrome-extension:") {
        return chrome.runtime.getURL("standalone/calc.html");
      } else if (
        window.location.hostname === "127.0.0.1" ||
        window.location.hostname === "essentialkit.org"
      ) {
        return window.location.origin + "/assets/demos/calculator/calc.html";
      }
      console.error("Invalid path");
      return "";
    },
  },
};

// This class is responsible to loading/reloading/unloading the angular app into the UI.
export class Previewr {
  logger = new Logger("previewr");
  dialog?: WinBox;
  url?: URL;
  api = apis.default;

  /* This function inserts an Angular custom element (web component) into the DOM. */
  init() {
    if (this.inIframe()) {
      this.logger.debug(
        "Not inserting previewr in iframe: ",
        window.location.href,
      );
      return;
    }

    this.listenForCspError();
    document.addEventListener("keydown", this.onEscHandler);
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
  };

  async handleMessage(message) {
    this.logger.debug("#handleMessage: ", message);
    this.api = apis.default;
    const mode = message.mode;
    if (mode === "demo") {
      this.api = apis.demo;
    } else if (mode === "ghPage") {
      this.api = apis.ghPage;
    }
    switch (message.action) {
      case "toggle-calculator":
        try {
          let link = this.api.standaloneLink();
          console.log("creatign url", link);
          let newUrl = new URL(link);
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
      this.dialog = new WinBox(this.api.i18n("appName"), winboxOptions);
    } else {
      this.logger.debug("restoring dialog");
      this.dialog.setUrl(url.href);
      this.dialog.move(
        winboxOptions.x,
        winboxOptions.y,
        /* skipUpdate= */ false,
      );
    }

    await this.registerFeedbackUI();
    this.dialog?.show();
  }

  async registerFeedbackUI() {
    const feedbackData: FeedbackData | null =
      await Storage.get(FEEDBACK_DATA_KEY);
    const shouldShow = feedbackData?.status === "eligible";
    if (shouldShow) {
      this.dialog?.addClass("show-footer");
    }

    // Listen for component events.
    const ff = this.dialog?.dom.querySelector("feedback-form");
    ff.setProgressHandler((status, data) => {
      if (status === "started") {
        this.logger.log("started: this", this, chrome?.storage?.sync);
        const feedbackUpdate: FeedbackData = {
          status: "honored",
          timestamp: Date.now(),
          rating: data,
        };
        Storage.put(FEEDBACK_DATA_KEY, feedbackUpdate);

        Analytics.fireEvent("user_feedback", {
          action: "rate_experience",
          star_rating: data,
        });
      }

      if (status === "completed") {
        this.dialog?.removeClass("show-footer");
        Analytics.fireEvent("user_feedback", {
          action: "submit_feedback",
          feedback_text: data,
        });
      }
    });
  }

  async getWinboxOptions(url: URL, point?: DOMRect) {
    let pos = { x: 0, y: 0, placement: "top" };
    if (point) {
      pos = await this.getPos(point!);
    }
    return {
      icon: this.api.link("assets/logo-24x24.png"),
      x: pos.x,
      y: pos.y,
      width: "440px",
      height: "360px",
      autosize: false,
      class: ["no-max", "no-full", "no-min", "no-move"],
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
        document
          .querySelectorAll("floating-calculator-preview-window")
          ?.forEach((e) => e.remove());
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
          parseFloat(window.getComputedStyle(el).zIndex),
        ).filter((zIndex) => !Number.isNaN(zIndex)),
        0,
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
    div.style.height = "360px";
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
