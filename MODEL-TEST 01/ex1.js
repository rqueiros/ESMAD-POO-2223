function manipulateNumbers(numbers, operation) {
    if (operation === 'square') {
      return numbers.map(num => num ** 2);
    } else if (operation === 'cube') {
      return numbers.map(num => num ** 3);
    } else if (operation === 'sqrt') {
      return numbers.map(num => Math.sqrt(num));
    } else {
      return 'Invalid operation';
    }
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  
  const squares = manipulateNumbers(numbers, 'square');
  console.log(squares); // Output: [1, 4, 9, 16, 25]
  
  const cubes = manipulateNumbers(numbers, 'cube');
  console.log(cubes); // Output: [1, 8, 27, 64, 125]
  
  const roots = manipulateNumbers(numbers, 'sqrt');
  console.log(roots); // Output: [1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979]