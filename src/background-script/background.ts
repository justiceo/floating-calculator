import { ContextMenu } from "./context-menus";


new ContextMenu().init();

const uninstallUrl = "https://forms.gle/oRACFiJQCZW77Ssu8";
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
  chrome.tabs.sendMessage(tab.id, {action: "toggle-calculator"}, (response) => {
    console.log("BG: received", response);
  });
});