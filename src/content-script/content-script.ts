import { Logger } from "../utils/logger";
import { Previewr } from "./previewr";
import "./content-script.css";

class Listener {
  showTimeout?: number;
  logger = new Logger("content-script");
  lastMousePosition?: DOMRect;
  previewr = new Previewr();

  start() {
    document.addEventListener("mousemove", (e) => {
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
    });

    this.previewr.init();

    chrome.runtime.onMessage.addListener((request, sender, callback) => {
      if (typeof request === "string") {
        // Message is for other parts of application.
        return;
      }
      this.logger.debug("Re-posting message for DOM: ", request);
      if (!request.point) {
        request.point = this.lastMousePosition;
      }
      if (request.action === "user-text-selection") {
        // Clear any existing selections in order to not conflict.
        window.getSelection()?.removeAllRanges();
      }
      this.handleMessage(request.action, request.data, request.point);
      callback("ok");
    });
  }

  handleMessage(action: string, data: any, point: any) {
    const mssg = {
      application: "floating-calculator",
      action: action,
      data: data,
      point: point,
    };
    this.previewr.handleMessage(mssg);
  }
}

if (self === top) {
  // only execute in the top frame.
  new Listener().start();
}
