import Analytics from "../utils/analytics";
import Storage from "../utils/storage";
import { INSTALL_TIME_MS } from "../utils/storage";

const uninstallUrl = "https://forms.gle/iE1DgamFFEy2g2fDA";
const welcomeUrl = chrome.runtime.getURL("welcome/welcome.html");

const onInstalled = (details: chrome.runtime.InstalledDetails) => {
  // Set the installation time in storage.
  Storage.put(INSTALL_TIME_MS, Date.now());

  // On fresh install, open page how to use extension.
  if (details.reason === "install") {
    Analytics.fireEvent("install");
    chrome.tabs.create({
      url: welcomeUrl,
      active: true,
    });
  }

  // Set url to take users upon uninstall.
  chrome.runtime.setUninstallURL(uninstallUrl, () => {
    Analytics.fireEvent("uninstall");
    if (chrome.runtime.lastError) {
      console.error("Error setting uninstall URL", chrome.runtime.lastError);
    }
  });
};
chrome.runtime.onInstalled.addListener(onInstalled);