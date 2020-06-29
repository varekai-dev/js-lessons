/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики

document.addEventListener('DOMContentLoaded', () => {
  const movieList = document.querySelector('.promo__interactive-list'),
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    checkbox = addForm.querySelector('[type="checkbox"]'),
    adv = document.querySelectorAll('.promo__adv img');

  //база даних
  const movieDB = {
    movies: [
      'Логан',
      'Лига справедливости',
      'Ла-ла лэнд',
      'Одержимость',
      'Скотт Пилигрим против...',
    ],
  };

  // видалення реклами
  const deleteAdv = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  const makeChanges = (genre, poster) => {
    genre.textContent = 'drama';
    poster.style.backgroundImage = 'url("img/bg.jpg")';
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  // відсортувати по алфавіту

  addForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }

      if (favorite) {
        console.log('favorite movie');
      }

      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);

      createMovieList(movieDB.movies, movieList);
      addForm.reset();
    } else {
      alert('enter data');
    }
  });

  function createMovieList(films, parent) {
    sortArr(films);
    parent.innerHTML = '';
    films.forEach((film, i) => {
      parent.innerHTML += `
  <li class="promo__interactive-item">${i + 1}. ${film}
  <div class="delete"></div>
</li>
  `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i);
        createMovieList(films, parent);
      });
    });
  }

  deleteAdv(adv);
  makeChanges(genre, poster);

  createMovieList(movieDB.movies, movieList);
});
