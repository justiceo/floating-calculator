import "@webcomponents/custom-elements";
import { Logger } from "../utils/logger";
import componentHtml from "./scientific-calc.txt.html";
import "../utils/feedback/feedback";
import { ScientificCalc } from "./scientific-calc";

export class ScientificCalcComponent extends HTMLElement {
  logger = new Logger(this);

  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.logger.debug("element added to page.");
    this.render();
  }

  disconnectedCallback() {
    this.logger.debug("element removed from page.");
  }

  adoptedCallback() {
    this.logger.debug("element moved to new page.");
  }

  render() {
    const range = document.createRange();
    range.selectNode(document.getElementsByTagName("body").item(0));
    const documentFragment = range.createContextualFragment(componentHtml);
    const calcContainer = documentFragment.querySelector("div");
    if (!calcContainer) {
      return;
    }
    this.shadowRoot?.append(calcContainer);
    new ScientificCalc().init(calcContainer);

    // Add the stylesheet.
    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = chrome.runtime.getURL("standalone/scientific-calc.css");
    this.shadowRoot?.append(style);
  }
}

customElements.define("scientific-calc", ScientificCalcComponent);
