const movies = [
  {
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    year: 1994,
    cover: 'https://m.media-amazon.com/images/I/519NBNHX5BL.jpg',
    trailer: 'https://www.youtube.com/embed/6hB3S9bIaco',
  },
  {
    title: 'The Godfather',
    genre: 'Drama',
    year: 1972,
    cover: 'https://m.media-amazon.com/images/I/41+HJCUl3EL.jpg',
    trailer: 'https://www.youtube.com/embed/5DO-nDW43Ik',
  },
];

const addTitle = document.getElementById('addTitle');
const addGenre = document.getElementById('addGenre');
const addYear = document.getElementById('addYear');
const addCover = document.getElementById('addCover');
const addTrailer = document.getElementById('addTrailer');
const addForm = document.getElementById('addForm');
const tableBody = document.getElementById('tableBody');
const dialogCover = document.getElementById('dialogCover');
const dialogTrailer = document.getElementById('dialogTrailer');

const buildTable = () => {
  let template = '';
  for (const movie of movies) {
    template += `<tr>
        <td>${movie.title}</td>
        <td>${movie.genre}</td>
        <td>
            <button onclick="openCover('${movie.cover}')">SEE COVER</button>
            <button onclick="openTrailer('${movie.trailer}')">SEE TRAILER</button>
            <button onclick="removeMovie('${movie.title}')">REMOVE</button>
        </td>
    </tr>`;
  }
  tableBody.innerHTML = template;
};
buildTable();

const removeMovie = (title) => {
  const index = movies.findIndex((movie) => movie.title === title);
  movies.splice(index, 1);
  buildTable();
};

const openTrailer = (src) => {
  const iframe = dialogTrailer.querySelector('iframe');
  iframe.src = src;
  dialogTrailer.showModal();
};

const openCover = (src) => {
  const img = dialogCover.querySelector('img');
  img.src = src;
  dialogCover.showModal();
};

const addMovie = (event) => {
  event.preventDefault();
  const newMovie = {
    title: addTitle.value,
    genre: addGenre.value,
    year: addYear.value,
    cover: addCover.value,
    trailer: addTrailer.value,
  };
  if (movies.some((movie) => movie.title === newMovie.title)) {
    return alert('Movie already exists');
  }

  movies.push(newMovie);
  buildTable();
  console.log(movies);
  addForm.reset();
  return true;
};
addForm.addEventListener('submit', addMovie);
