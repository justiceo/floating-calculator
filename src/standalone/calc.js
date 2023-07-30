let lastAns = "";
let lastInput = "";
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
    console.error("eval error:", res.msg);
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

  if (lastInput === "=" && !isOperator && text !== "=") {
    pretext.innerText = "Ans = " + lastAns;
    input.value = "";
  }

  switch (text) {
    case "=":
      let ans = evaluateInput(input.value);
      if (ans) {
        addToHistory(Date.now(), input.value, ans);
        history.push({
          timestamp: Date.now(),
          expression: input.value,
          result: ans,
        });
        pretext.innerText = input.value + " =";
        input.value = ans;
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
      input.value += "sqrt(";
      break;
    case "x!":
      input.value += "!";
      break;
    case "xy":
      input.value += "^";
      break;
    case "x2":
      input.value += "^2";
      break;
    case "sin":
      input.value += "sin(";
      break;
    case "cos":
      input.value += "cos(";
      break;
    case "tan":
      input.value += "tan(";
      break;
    case "sin-1":
      input.value += "asin(";
      break;
    case "cos-1":
      input.value += "acos(";
      break;
    case "tan-1":
      input.value += "atan(";
      break;
    case "log":
      input.value += "log(";
      break;
    case "ln":
      input.value += "ln(";
      break;
    case "10x":
      input.value += "10^";
      break;
    case "ex":
      input.value += "e^";
      break;
    case "mod":
      input.value += " mod ";
      break;
    case "y√x":
      // has to be preceeded by a number
      input.value += "^1/";
      break;
    default:
      input.value = input.value + text;
  }
  lastInput = text;
}

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

function showNotification(text) {
  const notifEl = document.querySelector(".notification");
  notifEl.innerText = text;
  notifEl.classList.remove('d-none');
  setTimeout(() => {
    notifEl.classList.add('d-none')
  }, 1500);
}