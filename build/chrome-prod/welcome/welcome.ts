import { Previewr } from "../content-script/previewr";

const previewr = new Previewr();
previewr.init();

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
    previewr.handleMessage({
      application: "floating-calculator",
      action: "toggle-calculator",
      data: { mode: "demo" },
      point: lastMousePosition,
    });
  });
});
