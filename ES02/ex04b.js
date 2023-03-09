const checkPerfect = function (num) {
  let temp = 0;
  for (let i = 1; i <= num / 2; i += 1) {
    if (num % i === 0) {
      temp += i;
    }
  }

  if (temp === num && temp !== 0) {
    return true;
  }
  return false;
};

let result;
do {
  const num = +prompt('Enter the number to check if it is a perfect');
  result = checkPerfect(num);
} while (!result);

alert('The number is a perfect!');
