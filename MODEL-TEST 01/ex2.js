function manipulateList(list, operation) {
    if (operation === 'reverse') {
        return list.slice().reverse();
    } else if (operation === 'sort') {
        return list.slice().sort();
    } else if (operation === 'extract') {
        
        let i = Math.floor(Math.random() * list.length);
        let j = Math.floor(Math.random() * list.length);

        (i > j) ? [i, j] = [j, i] : [i,j]

        return list.slice(i, j)
    } else {
        return 'Invalid operation';
    }
}

// Example usage:
const list = ['apple', 'banana', 'orange', 'kiwi'];

const reversed = manipulateList(list, 'reverse');
console.log(reversed); // Output: ['kiwi', 'orange', 'banana', 'apple']

const sorted = manipulateList(list, 'sort');
console.log(sorted); // Output: ['apple', 'banana', 'kiwi', 'orange']

const shuffled = manipulateList(list, 'extract');
console.log(shuffled); // Output: (random order)