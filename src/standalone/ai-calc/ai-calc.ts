import { evaluate } from "mathjs";
import { Tab } from "../bootstrap5";

export class AiCalc {
  lastAns = "";
  prevInput = "";
  history = [];
  evalScope = {};
  operators = ["+", "−", "×", "÷", "%", "!"];
  digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  isInactive = false;
  rootElem: HTMLElement;
  MODEL_ID = "chat-bison";
  PROJECT_ID = "xtension-project";

  init(rootElem: HTMLElement) {
    console.log("AiCalc init", rootElem);
    this.rootElem = rootElem;

    // Alternatives considered to setInterval include listening to "focusin" and "focusout".
    // Cannot listen to "focus" and "blur" events directly on document.
    // setInterval(() => {
    //   this.checkDocumentFocus();
    // }, 300);

    this.rootElem
      .querySelector("#send-query")
      ?.addEventListener("click", () => {
        let query = this.rootElem.querySelector("#text-input")?.value;
        console.log("sending query", query);

        if (query) {
          // hello
        }
      });
    this.rootElem
      .querySelectorAll("#keypad-content button")
      .forEach((button) => {
        button.addEventListener("click", (e) => {
          this.handleClick(button.innerText.trim());
        });
      });

    rootElem.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        this.handleClick("=");
      }
    });

    this.rootElem
      .querySelector("#invSwitch")
      ?.addEventListener("change", (e) => {
        this.rootElem.querySelectorAll(".btn.f2").forEach((b) => {
          e.target.checked
            ? b.classList.remove("d-none")
            : b.classList.add("d-none");
        });
        this.rootElem.querySelectorAll(".btn.f1").forEach((b) => {
          e.target.checked
            ? b.classList.add("d-none")
            : b.classList.remove("d-none");
        });
      });

    this.rootElem
      .querySelector('a[data-bs-target="#history-content"]')
      ?.addEventListener("show.bs.tab", (event) => {
        if (this.history.length === 0) {
          return;
        }

        this.rootElem.querySelectorAll(".hist-item").forEach((i) => {
          i.remove();
        });

        // Todo: switch to chrome.i18n @@ui_locale
        let rtf = new Intl.RelativeTimeFormat(window.navigator.language);
        this.history.forEach((h) => {
          const timeDiff = Math.floor((h.timestamp - Date.now()) / 1000);
          let rtime = "";
          if (timeDiff < -3600) {
            rtime = rtf.format(Math.floor(timeDiff / 3600), "hours");
          } else if (timeDiff < -60) {
            rtime = rtf.format(Math.floor(timeDiff / 60), "minutes");
          } else {
            rtime = rtf.format(timeDiff, "seconds");
          }
          this.addToHistory(rtime, h.expression, h.result);
        });
      });

    // Display notice if we got to this UI due to an unsupported host.
    let query = window.location.search;
    if (query.indexOf("unsupportedHost") >= 0) {
      this.rootElem
        .querySelector(".unsupported-notice")
        ?.classList.remove("d-none");
    }

    // tabs
    // Bootstrap doesn't because it will use document.querySelector under the hood
    // which will not find the element since it's inside a custom element.
    // so we manually trigger the tab show, (while also calling bootstrap's api for compatibility reasons)
    const triggerTabList = this.rootElem.querySelectorAll("a[role='tab']");
    triggerTabList.forEach((triggerEl) => {
      const tabTrigger = new Tab(triggerEl);

      triggerEl.addEventListener("click", (event) => {
        event.preventDefault();

        this.rootElem
          .querySelectorAll(".tab-pane")
          .forEach((t) => t.classList.remove("active"));

        tabTrigger.show();
        const targetId = triggerEl.getAttribute("data-bs-target") ?? "";
        this.rootElem.querySelector(targetId)?.classList.add("active");
      });
    });
  }

  fmtInput(line) {
    return line
      .replaceAll("−", "-")
      .replaceAll("×", "*")
      .replaceAll("÷", "/")
      .replaceAll("π", "pi")
      .replaceAll("log(", "log10(")
      .replaceAll("ln(", "log(")
      .replaceAll("Ans", this.lastAns);
  }

  addToHistory(time, expression, result) {
    // TODO: Replace ans in expression.
    console.log("adding to history", time, expression, result);

    let nohistory = this.rootElem.querySelector(".no-history");
    if (nohistory && !nohistory.classList.contains("d-none")) {
      nohistory.classList.add("d-none");
    }

    let template = this.rootElem.querySelector(".history-item-template")!;
    let parent = template.parentElement;
    template = template.cloneNode(true);
    template.classList.remove("history-item-template");
    template.classList.add("hist-item");
    template.innerHTML = template.innerHTML
      .replace("timestamp", time)
      .replace("expression", expression)
      .replace("result", result);
    template.querySelectorAll("button").forEach((b) =>
      b.addEventListener("click", (e) => {
        this.rootElem.querySelector("input#text-input").value =
          e.target.innerText;
      })
    );
    parent?.prepend(template);
  }

  evaluateInput(line) {
    line = this.fmtInput(line);
    console.warn("evaluating line: ", line);

    let res = "";
    try {
      res = evaluate(line, this.evalScope);
    } catch (e) {
      this.showNotification(e.message);
      return "";
    }

    console.log("res", res);
    return res;
  }

  handleClick(text) {
    console.log("User clicked", text);
    let isOperator = this.operators.indexOf(text) >= 0;
    let isDigit = this.digits.indexOf(text) >= 0;
    let input = this.rootElem.querySelector(
      "input#text-input"
    ) as HTMLInputElement;
    let pretext = this.rootElem.querySelector(
      "span#pretext"
    ) as HTMLSpanElement;

    if (this.prevInput === "=" && !isOperator && text !== "=") {
      pretext.innerText = "Ans = " + this.lastAns;
      input.value = "";
    }

    switch (text) {
      case "=":
        let ans = this.evaluateInput(input.value);
        if (ans !== "") {
          this.addToHistory(Date.now(), input.value, ans);
          this.history.push({
            timestamp: Date.now(),
            expression: input.value,
            result: ans,
          });
          pretext.innerText = input.value + " =";
          this.setInput(input, ans);
          this.lastAns = ans;
          input.classList.remove("border-danger");
        } else {
          input.classList.add("border-danger");
        }
        break;
      case "AC":
        input.value = "";
        pretext.innerText = "";
        this.lastAns = "";
        break;
      case "Rad":
        window.angle = "rad";
        this.rootElem.querySelector(".btn.rad").disabled = true;
        this.rootElem.querySelector(".btn.deg").disabled = false;
        this.showNotification("Angles set to radians");
        break;
      case "Deg":
        window.angle = "deg";
        this.rootElem.querySelector(".btn.deg").disabled = true;
        this.rootElem.querySelector(".btn.rad").disabled = false;
        this.showNotification("Angles set to degrees");
        break;
      case "√":
        this.insertValue(input, "sqrt(");
        break;
      case "x!":
        this.insertValue(input, "!");
        break;
      case "xy":
        this.insertValue(input, "^");
        break;
      case "x2":
        this.insertValue(input, "^2");
        break;
      case "sin":
        this.insertValue(input, "sin(");
        break;
      case "cos":
        this.insertValue(input, "cos(");
        break;
      case "tan":
        this.insertValue(input, "tan(");
        break;
      case "sin-1":
        this.insertValue(input, "asin(");
        break;
      case "cos-1":
        this.insertValue(input, "acos(");
        break;
      case "tan-1":
        this.insertValue(input, "atan(");
        break;
      case "log":
        this.insertValue(input, "log(");
        break;
      case "ln":
        this.insertValue(input, "ln(");
        break;
      case "10x":
        this.insertValue(input, "10^");
        break;
      case "ex":
        this.insertValue(input, "e^");
        break;
      case "mod":
        this.insertValue(input, " mod ");
        break;
      case "y√x":
        // has to be preceeded by a number
        this.insertValue(input, "^1/");
        break;
      default:
        this.insertValue(input, text);
    }
    this.prevInput = text;
  }

  insertValue(input, text) {
    const caretPos = input.selectionStart;
    input.value =
      input.value.slice(0, caretPos) + text + input.value.slice(caretPos);
    input.focus({ focusVisible: true });
    input.setSelectionRange(caretPos + text.length, caretPos + text.length);
  }

  setInput(input, text) {
    input.value = text;
    input.focus({ focusVisible: true });
    // Hack to force caret at the end of input.
    setTimeout(() => {
      input.selectionStart = input.selectionEnd = 10000;
    }, 0);
  }

  showNotification(text, duration = 1500) {
    const notifEl = this.rootElem.querySelector(".notification");
    if (!notifEl) {
      return;
    }
    notifEl.innerText = text;
    notifEl.classList.remove("d-none");
    setTimeout(() => {
      notifEl.classList.add("d-none");
    }, duration);
  }

  // TODO: Fix this check since document is not longer the iframe.
  checkDocumentFocus() {
    if (document.hasFocus()) {
      this.isInactive = false;
      this.rootElem.style.background = "white";
      if (
        this.rootElem.querySelector("#text-input") !== document.activeElement
      ) {
        this.rootElem
          .querySelector("#text-input")
          .focus({ focusVisible: true });
      }
    } else {
      if (this.isInactive) {
        return; // prevent repetitively showing the notification.
      }
      this.isInactive = true;
      this.rootElem.style.background = "#eee";
      // TODO: Consider reducing the opacity as well.
      this.showNotification(
        "Inactive: click anywhere in calculator to activate",
        3000
      );
    }
  }
}
