const firstNum = 0;
const secondNum = 0;
const operator = '';
const displayTop = document.querySelector('.displayTop');
const numberArray = {};

function setUpNumbers(){

for (let i = 1; i <= 9; i++) {
    numberArray[i] = document.querySelector(`#btn-${i}`);
    numberArray[i].addEventListener('click', () => {
    display(i);
     });
}
}

setUpNumbers();

function display(toBeDisplayed){
    displayTop.textContent = toBeDisplayed;
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
