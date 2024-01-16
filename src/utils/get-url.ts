import { packageName } from "../config";

// A wrapper for chrome-compatible file access outside of the chrome context.
export const getURL = (path: string, mode?: string) => {
  if (!mode || mode === "default") {
    return chrome?.runtime?.getURL(path);
  }

  if (mode === "demo") {
    // for post-install welcome page demo.
    if (window.location.protocol === "chrome-extension:") {
      return chrome.runtime.getURL(path);
    }
    // for essentialkit (demo & prod) demo
    else if (
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname === "essentialkit.org"
    ) {
      return (
        window.location.origin + "/assets/demos/" + packageName + "/" + path
      );
    }
  }

  console.error("Invalid mode to getURL", path);
  return "";
};
