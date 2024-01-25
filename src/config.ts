import { Config, MenuItem } from "./types";

export const packageName = "floating-calculator";
export const applicationId =
  packageName + "/" + chrome?.i18n?.getMessage("@@extension_id");
export const sentryDsn =
  "https://11fa19323b3a48d5882f26d3a98c1864@o526305.ingest.sentry.io/4504743091699712";
export const measurementId = "G-ZCZLZLYH36";
export const gaApiSecret = "UIXmDH2iRxaZPMd1S_UUww";
export const uninstallUrl = "https://forms.gle/iE1DgamFFEy2g2fDA";
export const configOptions: Config[] = [
  {
    id: "default-action",
    type: "select",
    title: "optionDefaultAction",
    description: "optionDefaultActionDesc",
    default_value: "float",
    options: [
      { id: "float", text: "optionDefaultAction_floatOnPage" },
      { id: "extensionPopup", text: "optionDefaultAction_extensionPopup" },
      { id: "sidePanel", text: "optionDefaultAction_sidePanel" },
      { id: "newTab", text: "optionDefaultAction_newTab" },
      { id: "newWindow", text: "optionDefaultAction_newWindow" },
    ],
    dev_only: true,
  },
  {
    id: "default-width",
    type: "range",
    title: "optionDefaultWidth",
    description: "optionDefaultWidthDesc",
    default_value: 45,
    min: "20",
    max: "90",
  },
  {
    id: "default-height",
    type: "range",
    title: "optionDefaultHeight",
    description: "optionDefaultHeightDesc",
    default_value: 40,
    min: "20",
    max: "95",
  },
  {
    id: "blocked-sites",
    type: "textarea",
    title: "optionBlockedSites",
    description: "optionBlockedSitesDesc",
    default_value: "",
  },
  {
    id: "enable-fractions",
    type: "switch",
    title: "optionEnableFractions",
    description: "optionEnableFractionsDesc",
    default_value: false,
    dev_only: true,
  },
  {
    id: "answer-precision",
    type: "range",
    title: "optionAnswerPrecision",
    description: "optionAnswerPrecisionDesc",
    default_value: 6,
    min: "1",
    max: "10",
    dev_only: true,
  },
  {
    id: "default-to-basic",
    type: "switch",
    title: "optionDefaultToBasic",
    description: "optionDefaultToBasicDesc",
    default_value: false,
    dev_only: true,
  },
  {
    id: "enable-minimize",
    type: "switch",
    title: "optionEnableMinimize",
    description: "optionEnableMinimizeDesc",
    default_value: false,
  },
  {
    id: "enable-dark-mode",
    type: "switch",
    title: "optionEnableDarkMode",
    description: "optionEnableDarkModeDesc",
    default_value: false,
    dev_only: true,
  },
  {
    id: "use-comma-decimals",
    type: "switch",
    title: "optionUseCommaForDecimals",
    description: "optionUseCommaForDecimalsDesc",
    default_value: false,
    dev_only: true,
  },
];

export const contextMenus: MenuItem[] = [
  {
    menu: {
      id: "popup-calculator",
      title: "Open as Popup Window",
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
      title: "Open as New Tab",
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
      title: "Open in Side Panel",
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
