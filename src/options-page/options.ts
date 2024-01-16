import "../content-script/content-script"; // For demo.
import { SettingsUI } from "../utils/settings/settings";
import "./options.css";
import "../utils/feedback/feedback";
import { configOptions, packageName } from "../config";
import { appDescription, appName, i18n } from "../utils/i18n";
import { Logger } from "../utils/logger";

class Options {
  logger = new Logger(this);

  init() {
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
      window.postMessage(
        { application: packageName, action: "show-demo" },
        window.location.origin
      );
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Options().init();
});
