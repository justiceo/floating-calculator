import Analytics from "../utils/analytics";
import { RemoteLogger } from "../utils/logger";
import Storage from "../utils/storage";
import { contextMenus } from "../config";
import { MenuItem } from "../types";
/*
 * Set up context menu (right-click menu) for different conexts.
 * See reference https://developer.chrome.com/docs/extensions/reference/contextMenus/#method-create.
 * Max number of browser_action menu items: 6 - https://developer.chrome.com/docs/extensions/reference/contextMenus/#property-ACTION_MENU_TOP_LEVEL_LIMIT
 */

/*
 * Prefer arrow method names here -
 * https://www.typescriptlang.org/docs/handbook/2/classes.html#arrow-functions.
 */
declare var IS_DEV_BUILD: boolean;
class ContextMenu {
  logger = new RemoteLogger(this);

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

  CLEAR_STORAGE: MenuItem = {
    menu: {
      id: "clear-storage",
      title: "Clear Storage",
      visible: true,
      contexts: ["action"],
    },
    handler: (unusedInfo) => {
      chrome.storage.sync.clear();
      chrome.storage.local.clear();
    },
  };

  PRINT_STORAGE: MenuItem = {
    menu: {
      id: "print-storage",
      title: "Print Storage",
      visible: true,
      contexts: ["action"],
    },
    handler: async (unusedInfo) => {
      this.logger.log("Storage contents:", await Storage.getAll());
    },
  };

  DISABLE_ON_SITE: MenuItem = {
    menu: {
      id: "disable-on-site",
      title: "Disable on this site",
      visible: true,
      contexts: ["action"],
    },
    handler: (unusedInfo) => {
      Storage.getAndUpdate("blocked-sites", async (sites: string) => {
        let url;

        try {
          const tabs = await chrome.tabs.query({
            active: true,
            currentWindow: true,
          });
          const pageUrl = tabs[0].url ?? "";
          url = new URL(pageUrl);
        } catch (e) {
          this.logger.debug("Unable to parse url:", e);
          return sites;
        }
        if (!url) {
          this.logger.debug("URL is null");
          return sites;
        }

        // TODO: File urls do not have hostname.
        const newSites = sites ? sites + "\n" + url.hostname : url.hostname;
        return newSites;
      });
    },
  };

  browserActionContextMenu: MenuItem[] = [
    this.DISABLE_ON_SITE,
    ...contextMenus,
  ];

  init = () => {
    // Maybe add dev-only actions.
    if (IS_DEV_BUILD) {
      this.browserActionContextMenu.push(
        this.RELOAD_ACTION,
        this.CLEAR_STORAGE,
        this.PRINT_STORAGE
      );
    }
    // Check if we can access context menus.
    if (!chrome || !chrome.contextMenus) {
      this.logger.warn("No access to chrome.contextMenus");
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
      Analytics.fireEvent("context_menu_click", { menu_id: info.menuItemId });
      menuItem.handler(info, tab);
    } else {
      this.logger.error("Unable to find menu item: ", info);
    }
  };

  sendMessage(message: any): void {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id!, message, (response) => {
        this.logger.debug("ack:", response);
      });
    });
  }
}

new ContextMenu().init();
