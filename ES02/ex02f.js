function showNumbers(a, b) {
  let result = '';
  for (let i = a; i < b; i += 1) {
    result += i;
  }
  console.log(result);
}

const a = +prompt('Enter the first number');
const b = +prompt('Enter the second number');

showNumbers(a, b);
