// Director class
class Director {
  #name = '';

  #dateOfBirth = '';

  #country = '';

  constructor(name, dateOfBirth, country) {
    this.#name = name;
    this.#dateOfBirth = dateOfBirth;
    this.#country = country;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get dateOfBirth() {
    return this.#dateOfBirth;
  }

  set dateOfBirth(dateOfBirth) {
    this.#dateOfBirth = dateOfBirth;
  }

  get country() {
    return this.#country;
  }

  set country(country) {
    this.#country = country;
  }
}

// Movie class
class Movie {
  #title = '';

  #yearOfRelease = 0;

  #director = '';

  #duration = 0;

  #actors = '';

  constructor(title, yearOfRelease, director, duration, actors) {
    this.#title = title;
    this.#yearOfRelease = yearOfRelease;
    this.#director = director;
    this.#duration = duration;
    this.#actors = actors;
  }

  get title() {
    return this.#title;
  }

  set title(title) {
    this.#title = title;
  }

  get yearOfRelease() {
    return this.#yearOfRelease;
  }

  set yearOfRelease(yearOfRelease) {
    this.#yearOfRelease = yearOfRelease;
  }

  get director() {
    return this.#director;
  }

  set director(director) {
    this.#director = director;
  }

  get duration() {
    return this.#duration;
  }

  set duration(duration) {
    this.#duration = duration;
  }

  get actors() {
    return this.#actors;
  }

  set actors(actors) {
    this.#actors = actors;
  }
}

const directors = [];
const movies = [];

// Render Director select in add movie form
function renderDirectorComboBox(movieDirectorCombo) {
  let option;
  directors.forEach((element, index) => {
    option = document.createElement('option');
    option.value = index;
    option.innerHTML = element.name;
  });
  movieDirectorCombo.appendChild(option);
}

// Render movie table
const tableBody = document.getElementById('tableBody');
const buildTable = () => {
  let template = '';
  for (const movie of movies) {
    template += `<tr>
        <td>${movie.title}</td>
        <td>${movie.director.name}</td>
        <td>${movie.actors}</td>
        <td>${movie.yearOfRelease}</td>
        <td>${movie.duration}</td>
    </tr>`;
  }
  tableBody.innerHTML = template;
};
buildTable();

const movieForm = document.getElementById('movieForm');
const movieTitle = document.getElementById('title');
const movieYearOfRelease = document.getElementById('yearOfRelease');
const movieDirector = document.getElementById('director');
const movieDuration = document.getElementById('duration');
const movieActors = document.getElementById('actors');
const directorForm = document.getElementById('directorForm');
const directorName = document.getElementById('directorName');
const directorDOB = document.getElementById('directorDOB');
const directorCountry = document.getElementById('directorCountry');
const txtSearchDirectorMovies = document.getElementById('txtSearchDirectorMovies');
const txtSearchActorMovies = document.getElementById('txtSearchActorMovies');

// Create Director
const createDirector = (event) => {
  event.preventDefault();
  const newDirector = new Director(directorName.value, directorDOB.value, directorCountry.value);
  directors.push(newDirector);
  console.log(directors);
  renderDirectorComboBox(movieDirector);
  return true;
};
directorForm.addEventListener('submit', createDirector);

// Add Movie
const addMovie = (event) => {
  event.preventDefault();
  const newMovie = new Movie(
    movieTitle.value,
    movieYearOfRelease.value,
    directors[movieDirector.value],
    movieDuration.value,
    movieActors.value,
  );
  movies.push(newMovie);
  buildTable();
  console.log(movies);
  return true;
};
movieForm.addEventListener('submit', addMovie);

// Search movies by director
const searchDirectorMovies = () => {
  const directorToSearch = txtSearchDirectorMovies.value;
  const message = `Movies By Director ${directorToSearch}:`;
  let moviesFiltered = [];

  movies.forEach((element) => {
    if (element.director.name === directorToSearch) {
      moviesFiltered.push(element);
    }
  });
  console.log(message, moviesFiltered);
  moviesFiltered = [];
};

// Search movies by actor
const searchActorMovies = () => {
  const actorToSearch = txtSearchActorMovies.value;
  const message = `Movies With Actor ${actorToSearch}:`;
  let moviesFiltered = [];

  movies.forEach((element) => {
    if (element.actors.includes(actorToSearch)) {
      moviesFiltered.push(element);
    }
  });
  console.log(message, moviesFiltered);
  moviesFiltered = [];
};
