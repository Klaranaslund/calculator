let firstNum = [];
let secondNum = [];
let operator = '';
let operatorIsClicked = false; 

/** Selects and assigns the numeric buttons eventlisteners.
 */
function setUpNumbers(){
const numberArray = {};
    for (let i = 0; i <= 9; i++) {
        numberArray[i] = document.querySelector(`#btn-${i}`);
        numberArray[i].addEventListener('click', () => {
            handleNumberClick(i);
        });
    }
}

/** Selects and assigns the operator buttons eventlisteners.
 */
function setUpOperators(){
    document.querySelector('#btn-add').onclick = () => handleOperatorClick('+');
    document.querySelector('#btn-div').onclick = () => handleOperatorClick('/');
    document.querySelector('#btn-sub').onclick = () => handleOperatorClick('-');
    document.querySelector('#btn-mult').onclick = () => handleOperatorClick('x');
    document.querySelector('#btn-clear').onclick = () => clear();
    
    document.querySelector('#btn-equals').addEventListener('click', () => {
        if (operator === '/' && parseNumbers(secondNum) === 0) {
            snarkOnZeroDivision();
            return;
        }else 
        operate(parseNumbers(firstNum),operator,parseNumbers(secondNum)); 
        display(" = " + result);});
}

/** Display number when clicked. If an operator is not clicked, push
 * number into firstNum-array. Else, push number into secondNum-array.
*/
function handleNumberClick(number){
    display(number);
    if (!operatorIsClicked){
        firstNum.push(number);
        console.log(" firstnum: " + firstNum + " secondnum: " + secondNum);

    }else secondNum.push(number);
}

/** Display operator when clicked.
 * If both firstnum and secondnum contains values, operate and reset 
 * the arrays. Set flag for clicked operator to true.
 * Uptade global variable operator.
*/
function handleOperatorClick(op) {
    display(' ' + op + ' ');

    if (firstNum.length !== 0 && secondNum.length !== 0) {
        operate(parseNumbers(firstNum), operator, parseNumbers(secondNum));
        firstNum = [result];
        secondNum = [];
    } else if (firstNum.length !== 0) {
        operatorIsClicked = true;
    }
    operator = op;
}


function display(toBeDisplayed){
   document.querySelector('.display').textContent += toBeDisplayed;
}

/** Functions to conduct calculations.
*/
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

//Kan ev stoppa in logiken direkt i funktionsanrop och ta bort parseNumbers, tkr
//dock för nuvarande att det är snyggare att dela upp det pga läslighet.
function parseNumbers(numberToParse){
    return Number(numberToParse.join(''));
}

function snarkOnZeroDivision() {
    alert("Pls do not divide by zero, you absolute troglodyte :)");
    clear();
}

function operate(first, operator, second){
    switch(operator){
        case '+': 
            return add(first, second);
        
        case '-': 
            return subtract(first, second);

        case '/':
             return divide(first, second);
        
        case 'x':
            return multiply(first, second);
    }
    operatorIsClicked = false;
}

/** Clear all variables and textcontent for screen, allowing
 * new calculations to be made
 */
function clear(){
 firstNum = [];
 secondNum = [];
 operatorIsClicked = false;
 operator = '';
 document.querySelector('.display').textContent = '';
}

function runCalculator(){
    setUpNumbers();
    setUpOperators();
}

runCalculator();