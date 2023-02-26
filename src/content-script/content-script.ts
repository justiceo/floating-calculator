import { Message } from "../shared";
import { Logger } from "../logger";
import { Previewr } from "./previewr";
import { IFrameHelper } from "./iframe-helper";
import "./content-script.css";

class Listener {
  showTimeout?: number;
  logger = new Logger("content-script");
  lastMousePosition?: DOMRect;

  start() {
    document.onmouseup = (e) => this.deferredMaybeShow(e);
    document.onmousemove = (e) =>
      {
        // Make top space for popup.
        const y = e.y < 20 ? 20 : e.y;
        this.lastMousePosition = {
        width: 10,
        height: 10,
        x: e.x,
        y: y,
        left: e.x,
        top: y,
        right: e.x + 10,
        bottom: y + 10,
      } as DOMRect;
    };

    const iframeHelper = new IFrameHelper();
    iframeHelper.registerListeners();

    chrome.runtime.onMessage.addListener((request, sender, callback) => {
      this.logger.debug("Re-posting message for DOM: ", request);
      if (!request.point) {
        request.point = this.lastMousePosition;
      }
      if(request.action === "verbose-define") {
        // Clear any existing selections in order to not conflict.
        window.getSelection()?.removeAllRanges();
      }
      this.sendMessage(request.action, request.data, request.point);
      callback("ok");
    });
  }

  deferredMaybeShow(e: MouseEvent): void {
    // Allow a little time for cancellation.
    this.showTimeout = window.setTimeout(() => this.maybeShow(e), 0);
  }

  maybeShow(e: MouseEvent): void {
    // Filter out empty/irrelevant selections.
    if (typeof window.getSelection == "undefined") {
      return;
    }
    const selection = window.getSelection()!;
    if (selection.isCollapsed) {
      return;
    }

    // Show appropriate buttons.
    const selectedText = selection.toString().trim();
    const range = selection.getRangeAt(0);
    const boundingRect = range.getBoundingClientRect();
    this.logger.debug("Selected: ", selectedText);
    if (this.shouldDefine(e, selectedText)) {
      this.sendMessage("define", selectedText, boundingRect);
    }
  }

  shouldDefine(e: MouseEvent, selectedText: string): boolean {
    const isQuerySize = (text: string) => {
      return text.length > 0 && text.length < 100;
    };

    const isEmail = (email: string) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const isUrl = (urlStr: string) => {
      const absoluteUrlMatcher = new RegExp("^(?:[a-z+]+:)?//", "i");
      return absoluteUrlMatcher.test(urlStr);
    };

    const isDate = (dataStr: string) => {
      return !isNaN(Date.parse(dataStr));
    };

    const hasLetters = (text: string) => {
      return /[a-zA-Z]/.test(text);
    };

    const hasOddSymbols = (text: string) => {
      // TODO: implement.
      return false;
    };

    return (
      isQuerySize(selectedText) &&
      hasLetters(selectedText) &&
      !isEmail(selectedText) &&
      !isDate(selectedText) &&
      !isUrl(selectedText) &&
      !hasOddSymbols(selectedText)
    );
  }

  sendMessage(action: string, data: any, point: any) {
    const mssg = {
      application: "floating-calculator",
      action: action,
      data: data,
      point: point,
    };
    this.logger.debug("Sending message: ", mssg);
    window.postMessage(mssg, window.location.origin);
  }
}

new Listener().start();
new Previewr().init();
