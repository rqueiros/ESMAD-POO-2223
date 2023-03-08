let num = parseInt(prompt('Enter your number'), 10);

let bin = 0;
let rem;
let i = 1;
let step = 1;

while (num !== 0) {
  rem = num % 2;

  // Debug steps
  console.log(`Step ${step}: ${num}/2, Remainder = ${rem}, Quotient = ${parseInt(num / 2, 10)}`);
  
  num = parseInt(num / 2, 10);
  bin += rem * i;
  i *= 10;
  step += 1;
}

console.log(`Binary: ${bin}`);
