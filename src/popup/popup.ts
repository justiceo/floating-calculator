import "./popup.css";

document.addEventListener("DOMContentLoaded", (e) => {
  const standaloneLink = `chrome-extension://${chrome.i18n.getMessage("@@extension_id")}/standalone/calc.html`;
  const frame = document.querySelector("iframe");
  if(!frame) {
    console.error("iframe element should be present in the popup");
    return;
  }
  frame.src = standaloneLink;
});
