let num1;
let num2;
let operator;

let displayValue = document.querySelector('.display');
let valueArr = [];

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        displayValue.textContent = button.textContent;
        // switch (button.textContent){
        //     case "+":
        //         operator = button.textContent;
        //         break;
        //     case "-":
        //         operator = button.textContent;
        //         break;
        //     case "*":
        //         operator = button.textContent;
        //         break;
        //     case "/":
        //         operator = button.textContent;
        //         break;
        //     case "=":
        //         operator = button.textContent;
        //          break;
        // }
        valueArr.push(button.textContent)
    });
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
    return num1 / num2;
}

function operate(operator, num1, num2){
    let res;
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
            res = divide(num1, num2);
            break;
    }
    displayValue.textContent = res;
}