/**TO DO
 * Fixa alla onödiga variabler och byt till rimligare namn
 * Kolla upp strängar kontra arrayer i javascript för firstNum och secondNum
 * Fixa clear-button
 * Fixa så att det går att kedja uttryck
 * Fixa så att resultatet visas i övre delen av screen och stannar där när nya grejer matas in
 */


let firstNum = [];
let secondNum = [];
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
    if (!operatorIsClicked && secondNum.length === 0){
        firstNum.push(number);
        console.log("first array:" + firstNum);
    }else if(!operatorIsClicked && secondNum.length != 0){
        firstNum = result;
        secondNum.push(number);
        console.log("first array:" + firstNum);

    console.log("second array:" + secondNum);
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

function parseNumbers(numberToParse){
    return Number(numberToParse.join(''));
}

//Kan ev stoppa in logiken direkt i funktionsanrop och ta bort parseNumbers, tkr
//dock för nuvarande att det är snyggare att dela upp det pga läslighet.
const equals = document.querySelector('#btn-equals');
equals.addEventListener('click', () => {
    operate(parseNumbers(firstNum),operator,parseNumbers(secondNum));
}
);


const clearBtn = document.querySelector('#btn-clear')
clearBtn.onclick = () => clear();

/** Clear all variables and textcontent for screen, allowing
 * new calculations to be made
 */
function clear(){
 firstNum = [];
 secondNum = [];
 operatorIsClicked = false;
 operator = '';
 result = 0;
 displayTop.textContent = '';
}

function operate(parsedFirst, operator, parsedSecond){
    switch(operator){
        case '+': 
            return add(parsedFirst, parsedSecond);
        
        case '-': 
            return subtract(parsedFirst, parsedSecond);

        case '/':
            return divide(parsedFirst, parsedSecond);
        
        case 'x':
            return multiply(parsedFirst, parsedSecond);
    }
    operatorIsClicked = false;
   
}

function runCalculator(){
    setUpNumbers();
    setUpOperators();
}

runCalculator();