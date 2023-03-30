// 1a
const games = [
  { name: 'Rick Dangerous', year: 1989 },
  { name: 'Goblins', year: 1992 },
  { name: 'Golden Axe', year: 1989 },
];

// 1b
for (const game of games) {
  console.log(`1b NAME: ${game.name} / YEAR: ${game.year}`);
}

// 1c
console.log(`1c Number of games: ${games.length}`);

// 1d
const addName = document.getElementById('addName');
const addYear = document.getElementById('addYear');
const addForm = document.getElementById('addForm');

const addGame = (event) => {
  event.preventDefault();
  const newGame = {
    name: addName.value,
    year: addYear.value,
  };

  // 1e
  // The some() method tests whether at least one element in the array
  // passes the test implemented by the provided function
  if (games.some((game) => game.name === newGame.name)) {
    return alert('Game already exists');
  }

  games.push(newGame);
  console.log(games);
  return true;
};
addForm.addEventListener('submit', addGame);

// 1f
const averageLaunchDate = (games) => {
  // The reduce() method executes a user-supplied "reducer" callback function
  // on each element of the array, in order, passing in the return value from
  // the calculation on the preceding element.
  const sum = games.reduce((acc, game) => acc + game.year, 0);
  return sum / games.length;
};
console.log(`1f Average launch date: ${averageLaunchDate(games)}`);

// 1g
const removeName = document.getElementById('removeName');
const removeForm = document.getElementById('removeForm');

const removeGame = (event) => {
  event.preventDefault();
  const toRemoveName = removeName.value;
  const indexToRemove = games.findIndex((game) => game.name === toRemoveName);

  if (indexToRemove === -1) {
    return alert('Game not found');
  }

  games.splice(indexToRemove, 1);
  console.log(games);
  return true;
};
removeForm.addEventListener('submit', removeGame);

// 1h
const gamesFrom90 = (games) => {
  // The filter() method creates a shallow copy of a portion of a given array,
  // filtered down to just the elements from the given array that pass the test
  // implemented by the provided function.
  // The map() method creates a new array populated with the results of calling
  // a provided function on every element in the calling array.
  return games.filter((game) => game.year >= 1990 && game.year < 2000).map((game) => game.name);
};
console.log(`1h Games from 1990: ${gamesFrom90(games)}`);

// 1i
const concatenateGameNames = (games) => {
  return games
    .map((game) => game.name)
    .join('')
    .toLowerCase()
    .replaceAll(' ', '');
};
console.log(`1i Concatenated game names: ${concatenateGameNames(games)}`);
