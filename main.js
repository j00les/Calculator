const topDisplay = document.querySelector('.top-display');
const currentDisplay = document.querySelector('.current-display');
const operandButtons = document.querySelectorAll('.operand');
const operatorButtons = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clearBtn');
const allClearBtn = document.querySelector('.allClearBtn');
const equalBtn = document.querySelector('.equalBtn');

let firstOperand = '';
let secondOperand = '';
let currentOperator = null;

window.addEventListener('keydown', keyboardPress)
equalBtn.addEventListener('click', evalNumber)
clearBtn.addEventListener('click', clear)
allClearBtn.addEventListener('click', allClear)

operatorButtons.forEach(button => button.addEventListener('click', () => addOperator(button.textContent)));

operandButtons.forEach(button => button.addEventListener('click', () => addOperand(button.textContent)));


function addOperand(operand) {
   currentDisplay.textContent += operand
}

function addOperator(operator) {
   if (currentOperator !== null) evalNumber()
   firstOperand = currentDisplay.textContent
   currentOperator = operator
   topDisplay.textContent = `${firstOperand} ${currentOperator}`
}

function allClear() {
   currentDisplay.textContent = '0';
   topDisplay.textContent = '';
   firstOperand = '';
   lastOperand = '';
   currentOperator = null;
}

function clear() {
   currentDisplay.textContent = currentDisplay.textContent
      .toString()
      .slice(0, -1)

}

function keyboardPress(e) {
   if (e.key >= 0 && e.key <= 9) addOperand(e.key)
   if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
      addOperator(convertOperator(e.key))
}

function evalNumber() {
   if (currentOperator === null) return
   secondOperand = currentDisplay.textContent
   currentDisplay.textContent = roundResult(
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

function add(a, b) {
   return a + b
}

function subtract(a, b) {
   return a - b
}

function multiply(a, b) {
   return a * b
}

function divide(a, b) {
   return a / b
}


function operate(operator, num1, num2) {
   num1 = Number(num1);
   num2 = Number(num2);

   if (operator === '+') return add(num1, num2)
   if (operator === '-') return subtract(num1, num2)
   if (operator === '*') return multiply(num1, num2)
   if (operator === '/') {
      if (num2 === 0) return null
      return divide(num1, num2)
   }
}

console.log(operate('+', 5, 4))
console.log(operate('-', 5, 7))
console.log(operate('*', 5, 2))
console.log(operate('/', 6, 2))

