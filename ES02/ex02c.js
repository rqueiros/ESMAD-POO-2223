function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      alert(`The result is ${num1 + num2}`);
      break;
    case '-':
      alert(`The result is ${num1 - num2}`);
      break;
    case '*':
      alert(`The result is ${num1 * num2}`);
      break;
    case '/':
      if (num2 === 0) {
        alert('It is not possible to divide by zero');
      } else {
        alert(`The result is ${num1 / num2}`);
      }
      break;
    default:
      alert('Invalid operator!');
  }
}

const num1 = +prompt('Enter the first number');
const num2 = +prompt('Enter the second number');
const operator = prompt('Enter the operator');

calculator(num1, num2, operator);
