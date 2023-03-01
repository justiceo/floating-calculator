import { Logger } from "../logger";
import { getEngineConfig } from "./search-engine";

// This script is executed inside the preview (i.e. document is iframe).
export class IFrameHelper {
  iframeName = "essentialkit_calc_frame";
  logger = new Logger("iframe-helper");
  config = getEngineConfig();
  constructor() {
    /*
     * Favicon URL request, Window.Title request, apply custom CSS.
     * Redirect clicks.
     */
  }

  registerListeners() {
    if (!this.inIframe()) {
      return;
    }
    if (this.getFrameName() !== this.iframeName) { 
      return;
    }

    // Can't use DOMContentLoaded since DDG doesn't put definition markup in initial response.
    window.addEventListener("load", () => {
      // The DOM has already been rendered at this point.
      this.focusCalcUi();
    });

    window.addEventListener("unload", () => {
      this.sendMessage({
        action: "unload",
        href: document.location.href,
        sourceFrame: this.getFrameName(),
      });
    });

    document.addEventListener("keydown", (evt) => {
      evt = evt || window.event;
      var isEscape = false;
      if ("key" in evt) {
        isEscape = evt.key === "Escape" || evt.key === "Esc";
      } else {
        isEscape = evt.keyCode === 27;
      }
      if (isEscape) {
        this.sendMessage({
          action: "escape",
          href: document.location.href,
          sourceFrame: this.getFrameName(),
        });
      }
    });
  }

  inIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  getFrameName() {
    return window.name;
  }

  // Returns a truthy value (the link element) if event target is a link.
  getLinkTarget(e: MouseEvent | KeyboardEvent): EventTarget | null {
    var target: any = e.target;
    // If the <a> element contains other elements, we traverse the tree to find the anchor element clicked:
    do {
      if (target.nodeName.toUpperCase() === "A" && target.href) {
        return target;
      }
    } while ((target = target.parentElement));
    return null;
  }

  sendMessage(message: any) {
    this.logger.debug("#sendMessage", message);
    chrome.runtime.sendMessage({ application: "floating-calculator", ...message });
  }

  hideAllExcept(el) {
    if (!el) {
      return;
    }

    let ns = el.nextElementSibling;
    while (ns) {
      let nns = ns.nextElementSibling;
      if (ns.style) {
        ns.style.display = "none";
      }
      ns = nns;
    }

    let ps = el.previousElementSibling;
    while (ps) {
      let pps = ps.previousElementSibling;
      if (ps.style) {
        ps.style.display = "none";
      }
      ps = pps;
    }
    if(el.tagName !== "BODY") {
      this.hideAllExcept(el.parentElement);
    }
  }

  focusCalcUi() {
    let maybeDict = document.querySelectorAll(this.config.selector);
    if (maybeDict.length == 0) {
      this.logger.error("No match for selector, ", this.config.selector);
      this.sendMessage({
        action: "loaded-and-no-def",
        href: document.location.href,
        sourceFrame: this.getFrameName(),
      });
      return;
    }

    this.config["applyCss"]();

    // TODO: Handle multiple defs case. Sample query is "firm".
    // Handle search box visible sometimes, query is "principal"=>"denoting".
    // Weird rendering: "ßdesignate".
    this.hideAllExcept(maybeDict[0]);
    this.sendMessage({
      action: "loaded-and-cleaned",
      href: document.location.href,
      sourceFrame: this.getFrameName(),
    });
  }

}
