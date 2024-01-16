import { Logger } from "../utils/logger";
import Storage from "../utils/storage";
import { WinboxRenderer } from "./winbox-renderer";
import { packageName } from "../config";
import "./content-script.css";

export class ContentScript {
  logger = new Logger("content-script");
  lastMousePosition?: DOMRect;
  winboxRenderer = new WinboxRenderer();

  init() {
    this.winboxRenderer.init();
    this.trackMousePosition();
    this.listenForBgMessage();
  }

  trackMousePosition() {
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
  }

  listenForBgMessage() {
    chrome?.runtime?.onMessage?.addListener((request, sender, callback) => {
      if (typeof request === "string") {
        // Message is for other parts of application.
        return;
      }
      this.logger.debug("#onMessage: ", request);
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

  // The welcome pages and demo pages use window messages for triggering.
  listenForWindowMessages() {
    window.addEventListener(
      "message",
      (event) => {
        if (event.origin !== window.location.origin) {
          this.logger.debug(
            "Ignoring message from different origin",
            event.origin,
            event.data
          );
          return;
        }

        if (event.data.application !== packageName) {
          this.logger.debug(
            "Ignoring origin messsage not initiated by Floating Calculator"
          );
          return;
        }

        this.logger.log("#WindowMessage: ", event, "/ndata", event.data);
        this.handleMessage(event.data);
      },
      false
    );
  }

  handleMessage(action: string, data: { [key: string]: any }, point) {
    const mssg = Object.assign(
      { application: packageName, action: action, point: point },
      data
    );
    this.winboxRenderer.handleMessage(mssg);
  }

  showDemo() {
    this.logger.debug("#showDemo");
    this.winboxRenderer.handleMessage({
      application: packageName,
      action: "toggle-calculator",
      data: { mode: "demo" },
      point: this.lastMousePosition,
    });
  }
}

Storage.isCurrentSiteBlocked().then((isBlocked) => {
  const isTopFrame = window.self === window.top;
  if (!isBlocked && isTopFrame) {
    new ContentScript().init();
  }
});
