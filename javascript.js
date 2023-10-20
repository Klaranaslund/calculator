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
const displayTop = document.querySelector('.displayTop');

function setUpNumbers(){
const numberArray = {};
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
        console.log("Array 1 är nu:" + firstNum)

    }else secondNum.push(number);
    console.log("Array 2 är nu:" + secondNum)

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
    if(firstNum != 0 && secondNum != 0){
        operate(parseNumbers(firstNum),operator,parseNumbers(secondNum));
        firstNum = [];
        secondNum = [];
        firstNum.push(result);
        console.log("Array 1 är efter kedjning" + firstNum)

    }
    operatorIsClicked = true;
    }



function add(num1, num2){
    result = num1 + num2;
}
function subtract(num1, num2){
    result = num1 - num2;
}
function divide(num1, num2){
    result = num1 / num2;
}
function multiply(num1, num2){
    result = num1 * num2;
}

function parseNumbers(numberToParse){
    return Number(numberToParse.join(''));
}

//Kan ev stoppa in logiken direkt i funktionsanrop och ta bort parseNumbers, tkr
//dock för nuvarande att det är snyggare att dela upp det pga läslighet.
const equals = document.querySelector('#btn-equals');
equals.addEventListener('click', () => {
    operate(parseNumbers(firstNum),operator,parseNumbers(secondNum));
    console.log("Array 1 vid =:" + firstNum)
    console.log("Array 2 vid =:" + secondNum)

    display(" = " + result);
}
);

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

function runCalculator(){
    setUpNumbers();
    setUpOperators();
}

runCalculator();