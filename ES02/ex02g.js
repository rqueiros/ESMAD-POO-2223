function showMultiples(a, b) {
  let result = 0;
  for (let i = a; i <= b; i += 1) {
    if (i % 3 === 0) result += i;
  }
  alert(result);
}

const a = +prompt('Enter the first number');
const b = +prompt('Enter the second number');

showMultiples(a, b);
