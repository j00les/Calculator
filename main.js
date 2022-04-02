const topDisplay = document.querySelector('.top-display')
const currentDisplay = document.querySelector('.current-display');
const operandButtons = document.querySelectorAll('.operand');
const operatorButtons = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.cBtn')

let firstOperand = ''
let secondOperand = ''
let doResetScreen = false
let currentOperator = null

clearBtn.addEventListener('click', clear)
window.addEventListener('keydown', keyboardPress)

operatorButtons.forEach(button => button.addEventListener('click', () => addOperator(button.textContent)));

operandButtons.forEach(button => button.addEventListener('click', () => addOperand(button.textContent)));

// Operator functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


const operate = (operator, num1, num2) => {
   num1 = Number(num1);
   num2 = Number(num2);
   
   if (operator === '+') {
      return add(num1, num2)
   
   } else if (operator === '-') {
      return subtract(num1, num2)
   
   } else if (operator === '*') {
      return multiply(num1, num2)
   
   } else if (operator === '/')  {
      if (num2 === 0) return null
      return divide(num1, num2)
   };
};


function addOperand(operand) {
   currentDisplay.textContent += operand
   if(currentDisplay.textContent === '0' || doResetScreen) resetScreen()
};


function addOperator(operator) {
   if (currentOperator !== null) evalNumber()
   firstOperand = currentDisplay.textContent
   currentOperator = operator
   topDisplay.textContent = `${firstOperand} ${currentOperator}`
   resetScreen = true
}



function clear() {
   currentDisplay.textContent = '0';
   topDisplay.textContent = 'anjinx';
   firstOperand = '';
   lastOperand = '';
   currentOperator = null;

};


function resetScreen() {
   currentDisplay.textContent = ''; 
   doResetScreen = false;

};


function keyboardPress(e) {
   if (e.key >= 0 && e.key <= 9) addOperand(e.key) 
   if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') addOperator(convertOperator(e.key))
}



function evalNumber() {
   if (currentOperator === null || resetScreen) {
      return
   }
   secondOperand = currentDisplay.textContent
   currentDisplay.textContent = roundResult (
      operate(currentOperator, firstOperand, secondOperand)
   )
   topDisplay.textContent = `${firstOperand} ${currentOperator} ${secondOperand}`
   currentOperator = null

}



function roundResult(num) {
   return Math.round(num * 1000) / 1000
}




function convertOperator(keyOperator) {
   if (keyOperator === '*') return 'x'
   if (keyOperator === '/') return '÷'
   if (keyOperator === '+') return '+'
   if (keyOperator === '-') return '-'
}




