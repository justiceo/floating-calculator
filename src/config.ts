import { Config, MenuItem } from "./types";
import { i18n } from "./utils/i18n";

export const configOptions: Config[] = [
  {
    id: "default-action",
    type: "select",
    title: i18n("Default open action"),
    description: i18n(
      "Open the calculator inside a page or a side panel or standalone window."
    ),
    default_value: "float",
    options: [
      { id: "float", text: i18n("Float on page") },
      { id: "extensionPopup", text: i18n("Open as extension popup") },
      { id: "sidePanel", text: i18n("Display in side panel") },
      { id: "newTab", text: i18n("Open in new tab") },
      { id: "newWindow", text: i18n("Open in new window") },
    ],
    dev_only: true,
  },
  {
    id: "default-width",
    type: "range",
    title: i18n("Default width"),
    description: i18n("The width of the calculator when it launches."),
    default_value: 45,
    min: "20",
    max: "90",
  },
  {
    id: "default-height",
    type: "range",
    title: i18n("Default height"),
    description: i18n("The height of the calculator when it launches."),
    default_value: 40,
    min: "20",
    max: "95",
  },
  {
    id: "blocked-sites",
    type: "textarea",
    title: i18n("Disabled on Websites"),
    description: i18n(
      "Extension will not run on these sites. Enter one site per line."
    ),
    default_value: "",
  },
  {
    id: "enable-fractions",
    type: "switch",
    title: i18n("Display result in fractions"),
    description: i18n(
      "Where possible, renders the result as a fraction instead of decimal."
    ),
    default_value: false,
    dev_only: true,
  },
  {
    id: "answer-precision",
    type: "range",
    title: i18n("Answer precision"),
    description: i18n(
      "The number of decimal places that answers are round up to."
    ),
    default_value: 6,
    min: "1",
    max: "10",
    dev_only: true,
  },
  {
    id: "default-to-basic",
    type: "switch",
    title: i18n("Default to basic mode"),
    description: i18n(
      "Launch calculator in basic mode (no trigonometric functions)."
    ),
    default_value: false,
    dev_only: true,
  },
  {
    id: "enable-minimize",
    type: "switch",
    title: i18n("Enable minimize"),
    description: i18n(
      "Displays a control (in the header) for minimizing the calculator"
    ),
    default_value: false,
  },
  {
    id: "enable-dark-mode",
    type: "switch",
    title: i18n("Enable dark mode"),
    description: i18n("Give the interface a dark look."),
    default_value: false,
    dev_only: true,
  },
  {
    id: "use-comma-decimals",
    type: "switch",
    title: i18n("Use comma (,) for decimals"),
    description: i18n("Display 20.000,00 instead of 20,000.00"),
    default_value: false,
    dev_only: true,
  },
];

export const contextMenus: MenuItem[] = [
  {
    menu: {
      id: "popup-calculator",
      title: i18n("Open as Popup Window"),
      visible: true,
      contexts: ["all"],
    },
    handler: (data: chrome.contextMenus.OnClickData) => {
      chrome.windows.create(
        {
          url: `chrome-extension://${chrome.i18n.getMessage(
            "@@extension_id"
          )}/standalone/calc.html`,
          type: "popup",
          width: 440,
          height: 360,
        },
        function (window) {}
      );
    },
  },
  {
    menu: {
      id: "newtab-calculator",
      title: i18n("Open as New Tab"),
      visible: true,
      contexts: ["all"],
    },
    handler: (data: chrome.contextMenus.OnClickData) => {
      chrome.tabs.create(
        {
          url: `chrome-extension://${chrome.i18n.getMessage(
            "@@extension_id"
          )}/standalone/calc.html`,
          active: true,
        },
        () => {}
      );
    },
  },
  {
    menu: {
      id: "open-in-sidepanel",
      title: i18n("Open in Side Panel"),
      visible: true,
      contexts: ["all"],
    },
    handler: (data: chrome.contextMenus.OnClickData, tab) => {
      // This will open the panel in all the pages on the current window.
      // TODO: According the docs, it should only open in the current tab.
      // Ref - https://developer.chrome.com/docs/extensions/reference/api/sidePanel#user-interaction
      // TODO: Allow users to make browser action open in side panel.
      chrome.sidePanel.open({ tabId: tab.id });
    },
  },
];
