"use strict";

const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  hearts = document.querySelectorAll(".heart"),
  oneHeart = document.querySelector(".heart"),
  wrapper = document.querySelector(".wrapper");

box.style.backgroundColor = "yellow";
box.style.width = "500px";

box.style.cssText = `background-color: tomato; width:500px`;

btns[3].style.borderRadius = "100px";
circles[0].style.backgroundColor = "red";

for (let i = 0; i < hearts.length; i++) {
  hearts[i].style.backgroundColor = "pink";
}

hearts.forEach((item) => {
  item.style.backgroundColor = "blue";
});

const div = document.createElement("div");
const text = document.createTextNode("туду я");

div.classList.add("black");

// wrapper.append(div);

wrapper.prepend(div);
