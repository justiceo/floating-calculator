import { ContextMenu } from "./context-menus";


new ContextMenu().init();

const uninstallUrl = "https://forms.gle/iE1DgamFFEy2g2fDA";
const welcomeUrl = chrome.runtime.getURL("welcome/welcome.html");

const onInstalled = (details: chrome.runtime.InstalledDetails) => {
  // On fresh install, open page how to use extension.
  if (details.reason === "install") {
    chrome.tabs.create({
      url: welcomeUrl,
      active: true,
    });
  }

  // Set url to take users upon uninstall.
  chrome.runtime.setUninstallURL(uninstallUrl, () => {
    if (chrome.runtime.lastError) {
      console.error("Error setting uninstall URL", chrome.runtime.lastError);
    }
  });
};
chrome.runtime.onInstalled.addListener(onInstalled);

const onMessage = (
  message: any,
  sender: chrome.runtime.MessageSender,
  callback: (response?: any) => void
) => {
  console.log('Received message: ', message, ' from: ', sender);

  // For now, bounce-back message to the content script.
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length == 0) {
      console.error('Unexpected state: No active tab');
      return;
    }
    chrome.tabs.sendMessage(tabs[0].id!, message, (response) => {
      callback(response);
    });
  });
}

chrome.runtime.onMessage.addListener(onMessage);

chrome.action.onClicked.addListener((tab:chrome.tabs.Tab) => {
  if(!tab.id) {
    console.error("BG: click on tab without an id", tab);
    return;
  }

  // Check if URL is supported.
  let url = tab.url;
  if(!url ||
    !url.trim() ||
    url.startsWith("chrome-extension://") ||
    url.startsWith("chrome://") ||
    url.startsWith("https://chrome.google.com/webstore")) {
      chrome.tabs.create({
        url: `chrome-extension://${chrome.i18n.getMessage(
            "@@extension_id"
          )}/standalone/calc.html?unsupportedHost`,
        active: true,
      }, () => {
        console.log("successfully created Floating Calculator tab for unsupported host.");
      });
      return;
    }

  chrome.tabs.sendMessage(tab.id, {action: "toggle-calculator"}, (response) => {
    console.log("BG: received", response);
  });
});