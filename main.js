const currentDisplay = document.querySelector('.current-display');
const operandButtons = document.querySelectorAll('.operand');
const operatorButtons = document.querySelectorAll('.operator');

// Operator functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

operandButtons.forEach(button => button.addEventListener('click', () => appendNumber(button.textContent)));


function appendNumber(e) {
   currentDisplay.textContent += e
}

const operate = (operator, num1, num2) => {
   num1 = Number(num1)
   num2 = Number(num2)
   
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


