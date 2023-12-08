import { Config, MenuItem } from "./extension";

export const packageName = "floating-calculator";
export const applicationId =
  packageName + "/" + chrome?.i18n?.getMessage("@@extension_id");
export const sentryDsn =
  "https://11fa19323b3a48d5882f26d3a98c1864@o526305.ingest.sentry.io/4504743091699712";
export const measurementId = "G-ZCZLZLYH36";
export const gaApiSecret = "UIXmDH2iRxaZPMd1S_UUww";
export const uninstallUrl = "https://forms.gle/iE1DgamFFEy2g2fDA";
export const configOptions: Config[] = [];

export const contextMenus: MenuItem[] = [
  {
    menu: {
      id: "popup-calculator",
      title: "Open as Popup Window",
      visible: true,
      contexts: ["action"],
    },
    handler: (data: chrome.contextMenus.OnClickData) => {
      chrome.windows.create(
        {
          url: `chrome-extension://${chrome.i18n.getMessage(
            "@@extension_id",
          )}/standalone/calc.html`,
          type: "popup",
          width: 440,
          height: 360,
        },
        function (window) {},
      );
    },
  },
  {
    menu: {
      id: "newtab-calculator",
      title: "Open as New Tab",
      visible: true,
      contexts: ["action"],
    },
    handler: (data: chrome.contextMenus.OnClickData) => {
      chrome.tabs.create(
        {
          url: `chrome-extension://${chrome.i18n.getMessage(
            "@@extension_id",
          )}/standalone/calc.html`,
          active: true,
        },
        () => {},
      );
    },
  },
];
