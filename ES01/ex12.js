const maxNumberAttempts = parseInt(prompt('Enter the maximum number of attempts allowed'), 10);
const minRandom = 1;
const maxRandom = parseInt(prompt('Enter the maximum number of the interval to guess'), 10);

const num = Math.floor(Math.random() * (maxRandom - minRandom) + minRandom);
let numberAttempts = 0;

let guessingNum;

do {
  guessingNum = parseInt(prompt(`Enter a number between 1 and ${maxRandom}?`), 10);
  if (guessingNum > num) {
    console.log('Your number is greater than the random generated');
  } else if (guessingNum < num) {
    console.log('Your number is lower than the random generated');
  } else {
    console.log(`Congratulations, you guessed the number (${num})`);
  }
  numberAttempts += 1;
  if (numberAttempts === maxNumberAttempts) {
    console.log(`Your exceeded the maximum number of attempts. You lost, the number was: ${num}.`);
    break;
  }
} while (guessingNum !== num);
