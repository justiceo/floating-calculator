let lastAns = "";
let prevInput = "";
let history = [];
let evalScope = {};
let operators = ["+", "−", "×", "÷", "%", "!"];
let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function fmtInput(line) {
  return line
    .replaceAll("−", "-")
    .replaceAll("×", "*")
    .replaceAll("÷", "/")
    .replaceAll("π", "pi")
    .replaceAll("log(", "log10(")
    .replaceAll("ln(", "log(")
    .replaceAll("Ans", lastAns);
}

function addToHistory(time, expression, result) {
  // TODO: Replace ans in expression.
  console.log("adding to history", time, expression, result);

  let nohistory = document.querySelector(".no-history");
  if (nohistory && !nohistory.classList.contains("d-none")) {
    nohistory.classList.add("d-none");
  }

  let template = document.querySelector(".history-item-template");
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
      document.querySelector("input#text-input").value = e.target.innerText;
    })
  );
  parent.prepend(template);
}

function evaluateInput(line) {
  line = fmtInput(line);
  console.warn("evaluating line: ", line);

  let res = "";
  try {
    res = math.evaluate(line, evalScope);
  } catch (e) {
    showNotification(e.message);
    return "";
  }

  console.log("res", res);
  return res;
}

function handleClick(text) {
  console.log("User clicked", text);
  let isOperator = operators.indexOf(text) >= 0;
  let isDigit = digits.indexOf(text) >= 0;
  let input = document.querySelector("input#text-input");
  let pretext = document.querySelector("span#pretext");

  if (prevInput === "=" && !isOperator && text !== "=") {
    pretext.innerText = "Ans = " + lastAns;
    input.value = "";
  }

  switch (text) {
    case "=":
      let ans = evaluateInput(input.value);
      if (ans !== "") {
        addToHistory(Date.now(), input.value, ans);
        history.push({
          timestamp: Date.now(),
          expression: input.value,
          result: ans,
        });
        pretext.innerText = input.value + " =";
        setInput(input, ans)
        lastAns = ans;
        input.classList.remove("border-danger");
      } else {
        input.classList.add("border-danger");
      }
      break;
    case "AC":
      input.value = "";
      pretext.innerText = "";
      lastAns = "";
      break;
    case "Rad":
      window.angle = "rad";
      document.querySelector(".btn.rad").disabled = true;
      document.querySelector(".btn.deg").disabled = false;
      showNotification("Angles set to radians");
      break;
    case "Deg":
      window.angle = "deg";
      document.querySelector(".btn.deg").disabled = true;
      document.querySelector(".btn.rad").disabled = false;
      showNotification("Angles set to degrees");
      break;
    case "√":
      insertValue(input, "sqrt(");
      break;
    case "x!":
      insertValue(input, "!");
      break;
    case "xy":
      insertValue(input, "^");
      break;
    case "x2":
      insertValue(input, "^2");
      break;
    case "sin":
      insertValue(input, "sin(");
      break;
    case "cos":
      insertValue(input, "cos(");
      break;
    case "tan":
      insertValue(input, "tan(");
      break;
    case "sin-1":
      insertValue(input, "asin(");
      break;
    case "cos-1":
      insertValue(input, "acos(");
      break;
    case "tan-1":
      insertValue(input, "atan(");
      break;
    case "log":
      insertValue(input, "log(");
      break;
    case "ln":
      insertValue(input, "ln(");
      break;
    case "10x":
      insertValue(input, "10^");
      break;
    case "ex":
      insertValue(input, "e^");
      break;
    case "mod":
      insertValue(input, " mod ");
      break;
    case "y√x":
      // has to be preceeded by a number
      insertValue(input, "^1/");
      break;
    default:
      insertValue(input, text);
  }
  prevInput = text;
}

function insertValue(input, text) {
  const caretPos = input.selectionStart;
  input.value =
    input.value.slice(0, caretPos) + text + input.value.slice(caretPos);
  input.focus({ focusVisible: true });
  input.setSelectionRange(caretPos + text.length, caretPos + text.length);
}

function setInput(input, text) {
  input.value = text;
  input.focus({ focusVisible: true });
  // Hack to force caret at the end of input.
  setTimeout(() => { input.selectionStart = input.selectionEnd = 10000; }, 0);
}

function showNotification(text, duration = 1500) {
  const notifEl = document.querySelector(".notification");
  notifEl.innerText = text;
  notifEl.classList.remove("d-none");
  setTimeout(() => {
    notifEl.classList.add("d-none");
  }, duration);
}

let isInactive = null;
function checkDocumentFocus() {
  if (document.hasFocus()) {
    isInactive = false;
    document.querySelector("body").style.background = "white";
    if (document.querySelector("#text-input") !== document.activeElement) {
      document.querySelector("#text-input").focus({ focusVisible: true });
    }
  } else {
    if (isInactive) {
      return; // prevent repetitively showing the notification.
    }
    isInactive = true;
    document.querySelector("body").style.background = "#eee";
    // TODO: Consider reducing the opacity as well.
    showNotification(
      "Inactive: click anywhere in calculator to activate",
      3000
    );
  }
}

// Alternatives considered to setInterval include listening to "focusin" and "focusout".
// Cannot listen to "focus" and "blur" events directly on document.
setInterval(checkDocumentFocus, 300);

document.querySelectorAll("#keypad-content button").forEach((button) => {
  button.addEventListener("click", (e) => {
    handleClick(button.innerText.trim());
  });
});

document.querySelector("body").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    handleClick("=");
  }
});

document.querySelector("#invSwitch").addEventListener("change", (e) => {
  document.querySelectorAll(".btn.f2").forEach((b) => {
    e.target.checked ? b.classList.remove("d-none") : b.classList.add("d-none");
  });
  document.querySelectorAll(".btn.f1").forEach((b) => {
    e.target.checked ? b.classList.add("d-none") : b.classList.remove("d-none");
  });
});

const tabEl = document.querySelector('a[data-bs-target="#history-content"]');
tabEl.addEventListener("show.bs.tab", (event) => {
  if (history.length === 0) {
    return;
  }

  document.querySelectorAll(".hist-item").forEach((i) => {
    i.remove();
  });

  // Todo: switch to chrome.i18n @@ui_locale
  let rtf = new Intl.RelativeTimeFormat(window.navigator.language);
  history.forEach((h) => {
    const timeDiff = Math.floor((h.timestamp - Date.now()) / 1000);
    let rtime = "";
    if (timeDiff < -3600) {
      rtime = rtf.format(Math.floor(timeDiff / 3600), "hours");
    } else if (timeDiff < -60) {
      rtime = rtf.format(Math.floor(timeDiff / 60), "minutes");
    } else {
      rtime = rtf.format(timeDiff, "seconds");
    }
    addToHistory(rtime, h.expression, h.result);
  });
});

// Display notice if we got to this UI due to an unsupported host.
let query = window.location.search;
if (query.indexOf("unsupportedHost") >= 0) {
  document.querySelector(".unsupported-notice").classList.remove("d-none");
}

document.querySelector(".btn.open-popup").addEventListener("click", (e) => {
  chrome.windows.create(
    {
      url: `chrome-extension://${chrome.i18n.getMessage(
        "@@extension_id"
      )}/standalone/calc.html`,
      type: "popup",
      width: 655,
      height: 365,
    },
    function (window) {
      console.log("opened Floating Calculator in popup window.");
    }
  );
  window.close();
});

document.querySelector(".btn.close-notice").addEventListener("click", (e) => {
  document.querySelector(".unsupported-notice").classList.add("d-none");
});