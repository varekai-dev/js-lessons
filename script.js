/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";

// Код возьмите из предыдущего домашнего задания

// const a = prompt("movie", ""),
//   b = prompt("rating", ""),
//   c = prompt("movie", ""),
//   d = prompt("rating", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("number of movies", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("number of movies", "");
  }
}

// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyfilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("movie", ""),
      b = prompt("rating", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

// rememberMyfilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert("sad");
  } else if (10 <= personalMovieDB.count && personalMovieDB.count < 30) {
    alert("could be worse");
  } else if (personalMovieDB.count >= 30) {
    alert("jesusss");
  } else {
    alert("error");
  }
}
// detectPersonalLevel();

function showMYDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  } else {
    console.log("don' t fuck with me");
  }
}
showMYDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`your favorite genre with number ${i}`);
    personalMovieDB.genres[i - 1] = genre;
  }
}
writeYourGenres();
console.log(personalMovieDB);
