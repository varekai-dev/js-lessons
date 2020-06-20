const numbersOfFilms = +prompt("how much movies did you watch?", "");
console.log(numbersOfFilms);

const personalMovieDB = {
  count: numbersOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("last watched movie", ""),
  b = prompt("please rate it", ""),
  c = prompt("last watched movie", ""),
  d = prompt("please rate it", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
