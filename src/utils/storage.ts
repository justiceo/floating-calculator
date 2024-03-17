/* A light wrapper around chrome storage API. */
import { configOptions } from "../config";
export const FEEDBACK_DATA_KEY = "feedback_data";
export const INSTALL_TIME_MS = "install_time_ms";
export const SUCCESSFUL_INTERACTIONS = "successful_interactions";

class Storage {
  storageService: chrome.storage.SyncStorageArea | Window["localStorage"];
  constructor() {
    // Works like chrome.storage.local if syncing is disabled. Max holding of 100Kb.
    this.storageService = chrome?.storage?.sync ?? window.localStorage;
  }

  // Puts arbitrary value in map for key, overwriting any existing value.
  put(key: string, value: any): Promise<void> {
    if (value === null || value === undefined) {
      return Promise.reject("Attempting to save a null value");
    }

    if (!key) {
      return Promise.reject("Attempting to use a null key");
    }

    // localStorage fall-back.
    if (!chrome?.storage?.sync) {
      return this.storageService.setItem(key, JSON.stringify(value));
    }

    const data: any = {};
    data[key] = value;
    return this.storageService.set(data);
  }

  async get(key: string): Promise<any> {
    // localStorage fall-back.
    if (!chrome?.storage?.sync) {
      return JSON.parse(this.storageService.getItem(key));
    }

    const response = await this.storageService.get(key);
    return response[key];
  }

  // This alias for #get returns a default value for unset config options.
  async getConfig(key: string): Promise<any> {
    return (
      (await this.get(key)) ??
      configOptions.find((c) => c.id === key)?.default_value
    );
  }

  getAll(): Promise<any> {
    return this.storageService.get(null);
  }

  async getAndUpdate(
    key: string,
    updateFn: (val) => Promise<any>
  ): Promise<void> {
    const data = await this.get(key);
    return this.put(key, await updateFn(data));
  }

  async isCurrentSiteBlocked(): Promise<boolean> {
    const blockedSites = await this.get("blocked-sites");

    // window.location.hostname is nil for file URIs.
    if (
      blockedSites &&
      window.location.hostname &&
      blockedSites.includes(window.location.hostname)
    ) {
      return true;
    }
    return false;
  }
}
export default new Storage();
