function calcFactorial(num) {
  let product = 1;
  for (let i = 1; i <= num; i += 1) {
    product *= i;
  }
  return product;
}

console.log(calcFactorial(0));
console.log(calcFactorial(5));
console.log(calcFactorial(6));
