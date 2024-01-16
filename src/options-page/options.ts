import { SettingsUI } from "../utils/settings/settings";
import "./options.css";
import "../utils/feedback/feedback";
import { configOptions } from "../config";
import { appDescription, appName, i18n } from "../utils/i18n";
import { Logger } from "../utils/logger";
import { ContentScript } from "../content-script/content-script";

class Options {
  logger = new Logger(this);
  contentScript = new ContentScript();

  init() {
    this.contentScript.init();
    this.renderSettingsUI();
    this.setI18nText();
    this.registerDemoClickHandler();
  }

  renderSettingsUI() {
    document
      .querySelector(".options-container")
      ?.appendChild(new SettingsUI(configOptions));
  }

  setI18nText() {
    document.querySelector(".title")!.textContent = appName;
    document.querySelector(".description")!.textContent = appDescription;
    document.querySelector("#show-preview")!.textContent = i18n("showDemo");
    document.querySelector(".report-issue")!.textContent =
      i18n("reportAnIssue");
  }

  registerDemoClickHandler() {
    document.querySelector("#show-preview")?.addEventListener("click", () => {
      this.logger.debug("Handling demo click");
      this.contentScript.showDemo();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Options().init();
});
