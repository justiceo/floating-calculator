export interface MenuItem {
  menu: chrome.contextMenus.CreateProperties;
  handler: (
    info: chrome.contextMenus.OnClickData,
    tab?: chrome.tabs.Tab
  ) => void;
}
export interface SelectOption {
  id: string;
  text: string;
}
export interface Config {
  id: string;
  title: string;
  description: string;
  type: "checkbox" | "switch" | "range" | "select" | "radio" | "textarea";
  default_value: string | boolean | number;

  value?: any;
  options?: SelectOption[];
  min?: string;
  max?: string;
  step?: string;

  dev_only?: boolean;
}
