function checkNumber(randomNumber, attemptNumber) {
  if (randomNumber === attemptNumber) {
    return 0;
  } else if (randomNumber > attemptNumber) {
    return -1;
  } else {
    return 1;
  }
}

let attempts = 0;
let result;
const limitAttempts = 5;
const randomNumber = Math.floor(Math.random() * 100 + 1);

do {
  attempts += 1;
  const attemptNumber = +prompt('Enter a number');
  result = checkNumber(randomNumber, attemptNumber);
  if (result === 0) {
    break;
  } else if (result > 0) {
    alert('Number is LOWER!');
  } else {
    alert('Number is HIGHER');
  }
} while (attempts < limitAttempts);

if (result === 0) {
  alert(`CONGRATULATIONS, YOU GUESSED IT! (Number ${randomNumber})`);
} else {
  alert(`PATIENCE, PLEASE PLAY AGAIN! (The number was ${randomNumber})`);
}
