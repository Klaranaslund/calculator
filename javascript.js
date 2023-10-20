/**TO DO
 * Fixa alla onödiga variabler och byt till rimligare namn
 * Kolla upp strängar kontra arrayer i javascript för firstNum och secondNum
 * 
 * fixa bugg där resultatet är konstigt efter = -tecken.
 */


let firstNum = [];
let secondNum = [];
let operatorIsClicked = false; //lite fult
let operator = '';
const displayTop = document.querySelector('.displayTop'); //lite fult

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
    operate(parseNumbers(firstNum),operator,parseNumbers(secondNum)); // fult att ha med den här pga annorlunda? samtidigt fult att ha för sig sj?
    display(" = " + result);});
}

/** Display number when clicked. If an operator is not clicked, push
 * number into firstNum-array. Else, push number into secondNum-array.
*/
function handleNumberClick(number){
    display(number);
    if (!operatorIsClicked){
        firstNum.push(number);

    }else secondNum.push(number);
}

/** Display operator when clicked, assign its value to global variable.
 * If both firstnum and secondnum contains values, operate and reset 
 * the arrays. Set flag for clicked operator to true.
*/
function handleOperatorClick(op){
    display(op);
    operator = op;
    if(firstNum != 0 && secondNum != 0){
        operate(parseNumbers(firstNum),operator,parseNumbers(secondNum));
        firstNum = [];
        secondNum = [];
        firstNum.push(result);
    }
    operatorIsClicked = true;
    }

function display(toBeDisplayed){
    displayTop.textContent += toBeDisplayed;
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

/** Clear all variables and textcontent for screen, allowing
 * new calculations to be made
 */
function clear(){
 firstNum = [];
 secondNum = [];
 operatorIsClicked = false;
 operator = '';
 displayTop.textContent = '';
}

function runCalculator(){
    setUpNumbers();
    setUpOperators();
}

runCalculator();