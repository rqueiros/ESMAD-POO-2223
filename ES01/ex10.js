const num = parseInt(prompt('Enter your number'), 10);

/*
Method 1:
Arithmetic algorithm, calculate the rest of the division by 10.
*/

const unitNumber = num % 10;

console.log(unitNumber);

/*
Method 2:
Convert to string and extract the rightmost digit
*/

const numCastedToString = String(num);

console.log(numCastedToString.substring(numCastedToString.length - 1));
