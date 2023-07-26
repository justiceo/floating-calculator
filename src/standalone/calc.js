

function handleClick(text) {
    console.log("User clicked", text);
    let input = document.querySelector("input#text-input");
    switch(text) {
        case "=":
            // eval
            // update input value to answer
            // update results label to prompt
            // update history
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