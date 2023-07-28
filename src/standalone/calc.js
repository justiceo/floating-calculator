let insectEnv = Insect.initialEnvironment;
let lastAns = "";
let lastInput = "";
let operators = ["+", "−", "×", "÷", "%", "!"];
let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function fmtInput(line) {
  return line
    .replaceAll("%", "pct")
    .replaceAll("mod", "%")
    .replaceAll("−", "-")
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
  var res = Insect.repl(Insect.fmtPlain)(insectEnv)(line);
  if (res.msgType === "error") {
    console.error("insect:", res.msg);
    return "";
  }
  console.info("insect res: ", res);
  insectEnv = res.newEnv;
  return res.msg;
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
    case "Deg":
      // set mode.
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
    case "y√x":
      // has to be preceeded by a number
      input.value += "^1/";
      break;
    default:
      input.value = input.value + text;
  }
  lastInput = text;
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (e) => {
    handleClick(button.innerText.trim());
  });
});

document.querySelector("#invSwitch").addEventListener("change", (e) => {
  document.querySelectorAll(".btn.f2").forEach((b) => {
    e.target.checked ? b.classList.remove("d-none") : b.classList.add("d-none");
  });
  document.querySelectorAll(".btn.f1").forEach((b) => {
    e.target.checked ? b.classList.add("d-none") : b.classList.remove("d-none");
  });
});
