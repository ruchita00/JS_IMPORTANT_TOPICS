/**
 * DOM (DOCUMNET OBJECT MODEL)
 *
 * IT IS a data structure which resembles like a tree
 * Add html
 * remove html
 * modify css
 * modify html elements
 * modify html attributes
 *
 *
 * HTMLCollections : getElementByClassName, getElementByTagName
 * NodeList: querySelectorAll
 *
 * have a reference: all the html elements in the process is
 * needed to have a ref in js
 *
 *
 */

// const btn = document.getElementsByClassName("btn");
// const box = document.getElementById("box");
// const paras = document.getElementsByTagName("p");

// const btn2 = document.querySelector("#box>p>span");

const btn = document.querySelector(".btn");
const box = document.querySelector("#box");

console.log(btn);

btn.addEventListener("click", () => {
  box.style.backgroundColor = "blue";
});
