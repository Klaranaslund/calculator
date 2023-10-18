let firstNum = 0;
let secondNum = 0;
let operatorIsClicked = false;
let operator = '';
const displayTop = document.querySelector('.displayTop');
const numberArray = {};

function setUpNumbers(){
    for (let i = 1; i <= 9; i++) {
        numberArray[i] = document.querySelector(`#btn-${i}`);
        numberArray[i].addEventListener('click', () => {
        display(i);
        firstNum = i;
        });
    }
}

function display(toBeDisplayed){
    displayTop.textContent = toBeDisplayed;
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
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function divide(num1, num2){
    return num1 / num2;
}
function multiply(num1, num2){
    return num1 * num2;
}

const equals = document.querySelector('#btn-equals');

equals.addEventListener('click', () => {
    operate(firstNum,operator,secondNum);
   // console.log(firstNum+"="+secondNum);
}
);


function operate(firstNum, operator, secondNum){
    switch(operator){
        case '+': 
            return add(firstNum, secondNum);
        
        case '-': 
            return subtract(firstNum,secondNum);

        case '/':
            return divide(firstNum,secondNum);
        
        case '*':
            return multiply(firstNum,secondNum);
    }
   
}

function runCalculator(){
    setUpNumbers();
    setUpOperators();
}

runCalculator();