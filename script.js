let num1;
let num2;
let operator;

let displayValue = document.querySelector('.display');
let valueArr = [];

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    if (button.textContent === "="){
        button.addEventListener('click', () => {
            valueArr.push(button.textContent)
            calculate(groupNum(valueArr));
        });
    } else if (button.textContent === "Clear"){
        button.addEventListener('click', () => {
            displayValue.textContent = ""
            valueArr = [];
        });
    } else {
        button.addEventListener('click', () => {
            displayValue.textContent += button.textContent;
            valueArr.push(button.textContent)
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
    return num1 / num2;
}

function groupNum(arr){
    let numArray = []
    let num = "";
    console.log(arr);
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === "+" || arr[i] === "-" || arr[i] === "*" || arr[i] === "/" || arr[i] === "="){
            num = Number(num);
            numArray.push(num);
            numArray.push(arr[i]);
            num = "";
        } else {
            num += arr[i];
        }
    }
    return numArray;
}

function calculate(numArray){
    
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