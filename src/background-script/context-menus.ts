/*
 * Set up context menu (right-click menu) for different conexts.
 * See reference https://developer.chrome.com/docs/extensions/reference/contextMenus/#method-create.
 * Max number of browser_action menu items: 6 - https://developer.chrome.com/docs/extensions/reference/contextMenus/#property-ACTION_MENU_TOP_LEVEL_LIMIT
 */
interface MenuItem {
  menu: chrome.contextMenus.CreateProperties;
  handler: (
    info: chrome.contextMenus.OnClickData,
    tab?: chrome.tabs.Tab
  ) => void;
}

/*
 * Prefer arrow method names -
 * https://www.typescriptlang.org/docs/handbook/2/classes.html#arrow-functions.
 */
export class ContextMenu {
  RELOAD_ACTION: MenuItem = {
    menu: {
      id: "reload-extension",
      title: "Reload Extension",
      visible: true,
      contexts: ["action"],
    },
    handler: (unusedInfo) => {
      chrome.runtime.reload();
    },
  };
  POPUP_WINDOW_ACTION: MenuItem = {
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
            "@@extension_id"
          )}/standalone/calc.html`,
          type: "popup",
          width: 440,
          height: 360,
        },
        function (window) {}
      );
    },
  };
  NEW_TAB_ACTION: MenuItem = {
    menu: {
      id: "newtab-calculator",
      title: "Open as New Tab",
      visible: true,
      contexts: ["action"],
    },
    handler: (data: chrome.contextMenus.OnClickData) => {
      chrome.tabs.create({
        url: `chrome-extension://${chrome.i18n.getMessage(
            "@@extension_id"
          )}/standalone/calc.html`,
        active: true,
      }, () => {
        console.log("successfully created Floating Calculator tab");
      })
    },
  };

  browserActionContextMenu: MenuItem[] = [
    this.POPUP_WINDOW_ACTION,
    this.NEW_TAB_ACTION,
    this.RELOAD_ACTION,
  ];

  init = () => {
    // Check if we can access context menus.
    if (!chrome || !chrome.contextMenus) {
      console.warn("No access to chrome.contextMenus");
      return;
    }

    // Clear the menu.
    chrome.contextMenus.removeAll();
    // Add menu items.
    this.browserActionContextMenu.forEach((item) =>
      chrome.contextMenus.create(item.menu)
    );
    /*
     * When onClick is fired, execute the handler associated
     * with the menu clicked.
     */
    chrome.contextMenus.onClicked.addListener(this.onClick);
  };

  onClick = (info: chrome.contextMenus.OnClickData, tab?: chrome.tabs.Tab) => {
    const menuItem = this.browserActionContextMenu.find(
      (item) => item.menu.id === info.menuItemId
    );
    if (menuItem) {
      menuItem.handler(info, tab);
    } else {
      console.error("Unable to find menu item: ", info);
    }
  };

  sendMessage(message: any): void {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id!, message, (response) => {
        console.debug("ack:", response);
      });
    });
  }
}
