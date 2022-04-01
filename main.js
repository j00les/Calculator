const display  = document.querySelector('.display')

//Operator functions
const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

const operate = (operator, num1, num2) => {
   num1 = Number(num1)
   num2 = Number(num2)
   
   if (operator === '+') {
      return add(num1, num2)
   
   } else if (operator === '-') {
      return subtract(num1, num2)
   
   } else if (operator === 'x') {
      return multiply(num1, num2)
   
   }else if (operator === '/')  {
      if (b === 0) return null
      return divide(num1, num2)
   };
};
