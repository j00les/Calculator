let currentNumber = '';
let previousNumber = '';
let operator = '';

const currentDisplay = document.querySelector('.current-display');
const topDisplay = document.querySelector('.top-display');

const equalBtn = document.querySelector('.equalBtn');
const decimalBtn = document.querySelector('.decimalBtn');
const clearBtn = document.querySelector('.clearBtn');
const numberBtn = document.querySelectorAll('.operand');
const operatorBtn = document.querySelectorAll('.operator');

equalBtn.addEventListener('click', operate)
// clearBtn.addEventListener('click', )

numberBtn.forEach(button => {
   button.addEventListener('click', (e) => {
      handleNumber(e.target.textContent)
   });
});

function handleNumber(number) {
   if (currentNumber.length <= 11) {
      currentNumber += number
      currentDisplay.textContent = currentNumber
   }
}

operatorBtn.forEach(button => {
   button.addEventListener('click', (e) => {
      handleOperator(e.target.textContent)
   });
});

function handleOperator(op) {
   operator = op
   previousNumber = currentNumber
   topDisplay.textContent = `${previousNumber} ${operator} `
   currentNumber = ''
   currentDisplay.textContent = ''
}

function operate() {
   previousNumber = Number(previousNumber); // Convert value to number
   currentNumber = Number(currentNumber); //Convert value to number 

   const add = (a, b) => a + b
   const subtract = (a, b) => a - b
   const multiply = (a, b) => a * b
   const divide = (a, b) => a / b

   if (operator === '+') {
      previousNumber = add(currentNumber, previousNumber)
   } else if (operator === '-') {
      previousNumber = subtract(previousNumber, currentNumber)
   } else if (operator === 'x') {
      previousNumber = multiply(currentNumber, previousNumber)
   } else if (operator === '/') {
      previousNumber = divide(previousNumber, currentNumber)
      if (currentNumber <= 0) {
         displayResult()
      }
   }
   topDisplay.textContent += currentNumber
   previousNumber = previousNumber.toString()
   alterResult()
}

function displayResult() {
   previousNumber = 'Error!'
   topDisplay.textContent = ''
   currentNumber = ''
}

function alterResult() {
   if (previousNumber.length <= 11) {
      currentDisplay.textContent = previousNumber
   } else {
      currentDisplay.textContent = `${previousNumber.slice(0, 11)}`
   }
}
