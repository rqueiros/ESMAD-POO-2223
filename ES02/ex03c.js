function checkPrime(num) {
  let isPrime = true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

const num = +prompt('Enter the number to check if it is a prime');

if (checkPrime(num)) {
  alert(`The number ${num} is a prime!`);
} else {
  alert(`The number ${num} is not a prime!`);
}
