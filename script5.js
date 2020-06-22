"use strict";

const options = {
  name: "test",
  width: 1024,
  height: 768,
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest: function () {
    console.log("test");
  },
};

let counter = 0;

for (let key in options) {
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(`Option ${i} have equal: ${options[key][i]}`);
      counter++;
    }
  } else {
    console.log(`Option ${key} have equal: ${options[key]}`);
    counter++;
  }
}
// console.log(counter);

// console.log(options["colors"]["border"]);

// console.log(Object.keys(options).length);

options.makeTest();

const { border, bg } = options.colors;
console.log(border);
