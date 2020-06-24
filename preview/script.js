const btn = document.querySelectorAll('button'),
  overlay = document.querySelector('.overlay');

// btn.forEach((item, i) => {
//   item.onclick = function () {
//     alert(`click ${i + 1}`);
//   };
// });

// btn.onclick = function () {
//   alert('click');
// };

// btn.onclick = function () {
//   alert('second click');
// };

// btn.addEventListener('click', () => {
//   alert('click');
// });

// let i = 0;

const deleteElement = (e) => {
  console.log(e.currentTarget);
  console.log(e.type);
  // i++;
  // if (i == 1) {
  //   btn.removeEventListener('click', deleteElement);
  // }
};

// btn.addEventListener('click', deleteElement);

btn.forEach((item) => {
  item.addEventListener('click', deleteElement, { once: true });
});

// overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target);
});
