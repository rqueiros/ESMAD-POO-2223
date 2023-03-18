function addGame(name, year, genre, cover) {
  const table = document.querySelector('table');
  const line = document.createElement('tr');
  line.innerHTML = `
    <td>${name}</td>
    <td>${year}</td>
    <td>${genre}</td>
    <td><img src="${cover}"></td>
    <td><input type="button" value="x"></td>
  `;
  table.append(line);

  const buttonX = line.getElementsByTagName('input')[0];
  buttonX.addEventListener('click', function () {
    this.parentNode.parentNode.remove();
  });
}

// define the max value of the combo game year
const gameYear = document.querySelector('#txtGameYear');
const dateNow = new Date();
gameYear.max = dateNow.getFullYear();

const frmGame = document.querySelector('form');

frmGame.addEventListener('submit', function (event) {
  event.preventDefault();
  const year = document.querySelector('#txtGameYear').value;

  if (year <= 1950 || year > dateNow.getFullYear()) {
    alert('Error!');
  } else {
    alert('Validation OK!');
    const gameName = document.querySelector('#txtGameName').value;
    const gameGenre = document.querySelector('#sltGameGenre').value;
    const gameCover = document.querySelector('#urlGameCover').value;

    addGame(gameName, year, gameGenre, gameCover);

    frmGame.reset();
  }
});
