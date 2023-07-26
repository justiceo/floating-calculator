
var insectEnv = Insect.initialEnvironment;
var clearCommands = ["clear", "cls", "quit", "exit"];

function evaluateInput(line) {
    console.warn("evaluating line: ", line);
    var res = Insect.repl(Insect.fmtPlain)(insectEnv)(line);
    if(res.msgType === 'error') {
        console.error("insect:", res.msg);
        return "";
    }
    console.info("insect res: ", res)
    insectEnv = res.newEnv;
    return res.msg;
}

function handleClick(text) {
    console.log("User clicked", text);
    let input = document.querySelector("input#text-input");
    let pretext = document.querySelector("span#pretext");
    switch(text) {
        case "=":
            // Todo: update history
            let res = evaluateInput(input.value)
            if(res) {
                pretext.innerText = input.value + " =";
                input.value = res;
                input.classList.remove("border-danger");
            } else {
                input.classList.add("border-danger");
            }
            break;
        case "AC":
            input.value = "";
            break;
        default:
            input.value = input.value + text
    }
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener('click', e => {
        handleClick(button.innerText.trim());
    });
});