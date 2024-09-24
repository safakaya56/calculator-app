const result = document.querySelector(".result");

function display(button) {
    result.value += button.value;
}

function calculator() {
    const cevap = eval(result.value);
    result.value = cevap;
}

document.getElementById("equal").addEventListener("click", calculator);

document.getElementById("clear").addEventListener("click", () => {
    result.value = "";
});

document.getElementById("remove").addEventListener("click", () => {
    result.value = result.value.slice(0, -1);
});
