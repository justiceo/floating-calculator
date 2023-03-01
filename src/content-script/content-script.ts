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
    document.addEventListener("mousemove", (e) =>
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
    });

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
