import { Logger } from "../utils/logger";
import { ContentScript } from "../content-script/content-script";
import { translateMarkup } from "../utils/i18n";
import "./welcome.css";

export class Welcome {
  logger = new Logger(this);
  contentScript = new ContentScript();

  init() {
    this.contentScript.init();
    translateMarkup(document);

    document.querySelector("#demo-button")?.addEventListener("click", (e) => {
      this.contentScript.showDemo();
    });
  }
}

window.addEventListener("load", (e) => {
  new Welcome().init();
});
