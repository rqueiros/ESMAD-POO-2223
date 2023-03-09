function pow(x, n) {
  if (Number.isNaN(x)) {
    return 'Base must be a number';
  } else if (Number.isNaN(n) || !Number.isInteger(n) || n <= 1) {
    return 'Exponent must be an integer above 1';
  } else {
    return x ** n;
  }
}

const base = +prompt('Enter the base');
const exponent = +prompt('Enter the exponent');

console.log(pow(base, exponent));
