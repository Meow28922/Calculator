const numContainer = document.querySelector(".numbers");
const display = document.querySelector(".display");
const operators = document.querySelector(".operators");
const btnEqual = document.getElementById("btnEqual");
const btnClear = document.getElementById("btnClear");
let ans = 0;
/* -----DOM-------- */
const arrOperators = [
    "+", "-", "*", "/", "(", ")"
]
for (let i = 0; i <= 9; i++) {
    numContainer.innerHTML +=
        `<div>
            <div class="numBtn">${i}</div>
        </div>`;
}
arrOperators.forEach((operator) => {
    operators.innerHTML +=
        `<div>
            <div class="operatorBtn">${operator}</div>
        </div>`;
});
const btnNumbers = document.querySelectorAll(".numbers .numBtn");
const btnOperators = document.querySelectorAll(".operators .operatorBtn");
/* ---------------------------- */
function addDisplay(items) {
    items.addEventListener("click", () => {
        if(items.classList.contains("operatorBtn")) {
            display.innerHTML += ` ${items.innerHTML} `
        } else {
        display.innerHTML += items.innerHTML;}
    })
}
btnNumbers.forEach(addDisplay);
btnOperators.forEach(addDisplay);
btnClear.addEventListener("click", () => {
    display.innerHTML = "";
})
btnEqual.addEventListener("click", () => {
    display.innerHTML = eval(display.innerHTML);
});



