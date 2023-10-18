let firstNum = [];
let secondNum = [];
let parsedFirst = 0;
let parsedSecond = 0;
let operatorIsClicked = false;
let operator = '';
let result = 0;
const displayTop = document.querySelector('.displayTop');
const numberArray = {};

function setUpNumbers(){
    for (let i = 0; i <= 9; i++) {
        numberArray[i] = document.querySelector(`#btn-${i}`);
        numberArray[i].addEventListener('click', () => {
        display(i);
        handleNumber(i);
        });
    }
}


function handleNumber(number){
    if (!operatorIsClicked){
        firstNum.push(number);
        console.log("first array:" + firstNum);
    }else secondNum.push(number);
    console.log("second array:" + secondNum);
}


function display(toBeDisplayed){
    displayTop.textContent += toBeDisplayed;
}

function setUpOperators(){
        const addBtn = document.querySelector('#btn-add');
        addBtn.onclick = () => handleOperatorClick('+');

        const divideBtn = document.querySelector('#btn-div');
        divideBtn.onclick = () => handleOperatorClick('/');

        const subtractBtn = document.querySelector('#btn-sub')
        subtractBtn.onclick = () => handleOperatorClick('-');
        
        const multiplyBtn = document.querySelector('#btn-mult')
        multiplyBtn.onclick = () => handleOperatorClick('x');
}


function handleOperatorClick(op){
    display(op);
    operator = op;
    operatorIsClicked = true;
    console.log(op);
    }



function add(num1, num2){
    result = num1 + num2;
    display(" = " + result);
}
function subtract(num1, num2){
    result = num1 - num2;
    display(" = " + result);
}
function divide(num1, num2){
    result = num1 / num2;
    display(" = " + result);
}
function multiply(num1, num2){
    result = num1 * num2;
    display(" = " + result);
}

function parseNumbers(){
    console.log(firstNum);
    parsedFirst = parseInt(firstNum.join(''));
    console.log(parsedFirst);
    parsedSecond = parseInt(secondNum.join(''));
    console.log(parsedSecond);
}

const equals = document.querySelector('#btn-equals');
equals.addEventListener('click', () => {
    parseNumbers(); //concatenate and parse array of numbers into one number
    operate(parsedFirst,operator,parsedSecond);
    console.log(parsedFirst+"="+parsedSecond);
}
);


function operate(firstNum, operator, secondNum){
    switch(operator){
        case '+': 
            return add(parsedFirst, parsedSecond);
        
        case '-': 
            return subtract(parsedFirst, parsedSecond);

        case '/':
            return divide(parsedFirst, parsedSecond);
        
        case '*':
            return multiply(parsedFirst, parsedSecond);
    }
    operatorIsClicked = false;
   
}

function runCalculator(){
    setUpNumbers();
    setUpOperators();
}

runCalculator();