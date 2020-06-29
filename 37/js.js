const btns = document.querySelectorAll('button');
const firstBtn = document.querySelector('.some');
const wrapper = document.querySelector('.btn-block');
// console.log(btns[0].classList.item);
// console.log(window.location.href);

// btns[1].classList.add('red');
// btns[0].classList.remove('blue');

// btns[2].classList.add('blue');

// btns[3].classList.toggle('blue');

// console.log(firstBtn);

// firstBtn.addEventListener('click',() => {
//   btns[2].classList.toggle('blue');
// });

// if (btns[1].classList.contains('red')){
//   console.log('red');
// }

btns[0].addEventListener('click', () => {
  if (!btns[1].classList.contains('red')) {
    btns[1].classList.add('red');
  } else {
    btns[1].classList.remove('red');
  }
});

// console.log(btns[0].className);

wrapper.addEventListener('click', (event) => {
  // console.dir(event.target);
  if (event.target && event.target.matches('button.red')) {
    console.log('Hello');
  }
});

// btns.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     console.log('Hello');
//   });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
