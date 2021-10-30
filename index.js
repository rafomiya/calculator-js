const result = document.querySelector("#result");
const clear = document.querySelector("#clear");
const division = document.querySelector("#division");
const multiplication = document.querySelector("#multiplication");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const minus = document.querySelector("#minus");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const plus = document.querySelector("#plus");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const equals = document.querySelector("#equals");
const zero = document.querySelector("#zero");
const point = document.querySelector("#point");

const numbers = [
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    point
];

for (let i = 0; i < numbers.length; i++) {
    if (i === 10) {
        numbers[i].addEventListener("click", () => {
            result.value += ".";
        });
        break;
    }

    numbers[i].addEventListener("click", () => {
        result.value += i;
    })
}

const operations = [plus, minus, multiplication, division];

for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener("click", () => {
        symbols = ["+", "-", "*", "/"];

        result.value += ` ${symbols[i]} `;
    });
}

equals.addEventListener("click", () => {
    result.value = eval(result.value);
});

clear.addEventListener("click", () => {
    result.value = "";
})