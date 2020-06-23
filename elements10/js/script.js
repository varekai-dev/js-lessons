'use strict';

const box = document.getElementById('box'),
  btns = document.getElementsByTagName('button'),
  circles = document.getElementsByClassName('circle'),
  wrapper = document.querySelector('.wrapper'),
  hearts = document.querySelectorAll('.heart'),
  oneHeart = document.querySelector('.heart');

const div = document.createElement('div');

// div.classList.add('black');

box.style.backgroundColor = 'green';
box.style.width = '800px';

// box.style.cssText = 'background-color: blue; width: 500px';

hearts.forEach((item) => {
  item.style.backgroundColor = 'blue';
});

wrapper.append(div);

div.innerHTML = '<h1>hello</h1>';

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');

// div.textContent = 'Howdy';

// circles[1].remove();

// wrapper.removeChild(hearts[0]);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]);

// hearts[0].replaceWith(circles[0]);

// wrapper.replaceChild(circles[0], hearts[0]);
