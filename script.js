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
        let pointEvent = () => {
            result.value += ".";
        };

        numbers[i].addEventListener("click", pointEvent);
        document.addEventListener("keypress", event => {
            if (event.key === "." || event.key === ",")
                pointEvent();
        });
        break;
    }

    let numberEvent = () => result.value += i;

    numbers[i].addEventListener("click", numberEvent)
    document.addEventListener("keypress", event => {
        if (event.key == i)
            numberEvent();
    });
}

const operations = [plus, minus, multiplication, division];
symbols = ["+", "-", "*", "/"];

for (let i = 0; i < operations.length; i++) {
    let eventListener = () => result.value += ` ${symbols[i]} `;
    operations[i].addEventListener("click", eventListener);
    document.addEventListener("keypress", event => {
        if (event.key === symbols[i])
            eventListener();
    });
}

const equalsEvent = () => {
    if (result.value === "")
        result.value = "0";
    else
        try {
            result.value = eval(result.value);
        } catch (error) {
            result.value = "0";
        }
};
const clearEvent = () => result.value = "";

equals.addEventListener("click", equalsEvent);
clear.addEventListener("click", clearEvent);

document.addEventListener("keydown", event => {
    switch (event.key) {
        case "Enter":
            equalsEvent();
            break;

        case "Backspace":
            clearEvent();
            break;
    }
});