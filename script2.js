"use strict";

let num = 20;

function showFirstMessage(text) {
  console.log(text);
  console.log(num);
}

showFirstMessage("hello world");

function calc(a, b) {
  return a + b;
}

console.log(calc(2, 5));
console.log(calc(4, 1));

function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);
