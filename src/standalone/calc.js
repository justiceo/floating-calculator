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
      // Todo: update history
      let ans = evaluateInput(input.value);
      if (ans) {
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
      lastAns = ""
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
    case "log":
      input.value += "log(";
      break;
    case "ln":
      input.value += "ln(";
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
