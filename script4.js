"use strict";

function first() {
  setTimeout(function () {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

function learnJs(lang, callback) {
  console.log(`i am learning ${lang}`);
  callback();
}

function done() {
  console.log("i finished this lesson");
}
learnJs("javscript", done);
