import { ContentScript } from "../content-script/content-script";

const contentScript = new ContentScript();
contentScript.init();

window.addEventListener("load", (e) => {
  let lastMousePosition;
  document.addEventListener("mousemove", (e) => {
    // Make top space for popup.
    const y = e.y < 20 ? 20 : e.y;
    lastMousePosition = {
      width: 10,
      height: 10,
      x: e.x,
      y: y,
      left: e.x,
      top: y,
      right: e.x + 10,
      bottom: y + 10,
    } as DOMRect;
  });

  document.querySelector("#demo-button")?.addEventListener("click", (e) => {
    contentScript.showDemo();
  });
});
