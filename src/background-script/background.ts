import "./post-install";
import "./context-menus";
import "./icon-updater";
import "./feedback-checker";
import { getOrCreateSessionId } from "./session-id";
import Storage from '../utils/storage';
import {SUCCESSFUL_INTERACTIONS} from '../utils/storage';

const onMessage = (
  message: any,
  sender: chrome.runtime.MessageSender,
  callback: (response?: any) => void
) => {

  // Check if the message is from this extension.
  if (!sender.id || sender.id !== chrome.i18n.getMessage("@@extension_id")) {
    console.warn("Ignoring message from unknown sender", sender);
    return;
  }
  console.log("Received message: ", message, " from: ", sender);

  if (message === "get_or_create_session_id") {
    getOrCreateSessionId().then((sessionId) => {
      console.log("Sending session Id", sessionId);
      callback(sessionId);
    });
    return true; // Important! Return true to indicate you want to send a response asynchronously
  }

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

      // Log successful invocation.
      Storage.getAndUpdate(SUCCESSFUL_INTERACTIONS, (records) => {
        if (!records) {
          records = [];
        }

        records.push({
          interaction: "invocation",
          timestamp: Date.now(),
        });

        return records;
      })
    });
});