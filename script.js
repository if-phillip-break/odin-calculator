let num1 = "";
let num2 = "";
let operator = "";
let num = "";

let displayValue = document.querySelector('.display');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    if (button.textContent === "Clear"){
        button.addEventListener('click', () => {
            displayValue.textContent = ""
        });
    } else if (button.textContent === "+" || button.textContent === "-" || button.textContent === "*" || button.textContent === "/" || button.textContent === "="){
        button.addEventListener('click', () => {
            if (num1 === ""){
                num1 = Number(num);
            } else {
                num2 = Number(num);
            }
            num = "";
            if (operator === ""){
                operator = button.textContent;
            } else if (operator !== "" && num1 !== "" && num2 !== ""){
                num1 = operate(operator, num1, num2);
                operator = button.textContent;
                num2 = "";
            }
            displayValue.textContent += button.textContent;
        });
    } else {
        button.addEventListener('click', () => {
            displayValue.textContent += button.textContent;
            num += button.textContent;
        });
    }
});

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return Math.ceil(num1 / num2);
}

function operate(operator, num1, num2){
    let res = "";
    switch (operator){
        case "+":
            res = add(num1, num2);
            break;
        case "-":
            res = subtract(num1, num2);
            break;
        case "*":
            res = multiply(num1, num2);
            break;
        case "/":
            if (num2 === 0){
                displayValue.textContent = "Can't divide by 0";
                return res;
            } else {
                res = divide(num1, num2);
            }
            break;
    }
    res = Number(res);
    displayValue.textContent = res;
    return res;
}