'use strict';

console.log(typeof String(null));

console.log(typeof (5 + ''));

const num = 5;

console.log('https://vk.com/catalog/' + num);

const fontSiza = 26 + 'px';

// To Number

//1)
console.log(typeof Number('4'));

//2)

console.log(typeof +'4');

//3)
console.log(typeof parseInt('15px', 10));

// To boolean

// 0, '', null, undefined, NaN;

//1)

let switcher = null;

switcher = 1;

if (switcher) {
  console.log('working...');
}

//2)
console.log(typeof Boolean('4'));

//3)
console.log(typeof !!'4');
