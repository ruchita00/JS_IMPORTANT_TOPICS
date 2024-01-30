/**
 * Calllback function
 * js is functions are first class function
 * first class function - take another function as an argument return a
 * function.
 * time complexity: nlogn
 *
 */

function x(a) {
  return a;
}

function sayHello() {
  console.log("hello from callback");
}

const res = x(sayHello);
console.log(res());

/**
 * Sort()
 *
 * computer science: in place : sorting alogrithm
 * computer science: three way comparision, >  ,< , ===
 */

const arr = [34, 55, 2, 1, 44, 33, 56];

arr.sort((a, b) => a - b); //asc order alogrihthm
arr.sort((a, b) => b - a); //desc order alogrithm

/**
 * Object.freeze() and object.seal()
 *
 * object.freeze means obj becomes immutable
 */

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

// Object.freeze(obj1);

Object.seal(obj1);
obj1.d = "ruchi"; //external no
obj1.a = 22; //internal yes
delete obj1.b; //external no

console.log(obj1);

/**
 * Destructuring: assigning or extracting individual keys
 *  and array elements into their own variables
 */

const arr1 = [1, 2, 3, 4, 4, 5];

const [a, b, c, d, ...e] = arr1;

console.log(a);
console.log(b);

const objd = {
  name: "mph",
  city: "Banglore",
  state: "KA",
  pincode: 560068,
  address: {
    road: 20,
    area: "xyz",
    phone: 1234567890,
  },
};
const {
  add: { phone: w },
} = objd;

console.log(add.phone);

/**
 * Events and event handling
 */

const btn = document.querySelector("button");
const list = document.querySelector("ul");
const p = document.querySelector("ul");

btn.addEventListener("click", () => {
  //   btn.style.color = "red";
  //create a html element
  const item = document.createElement("li");

  //defining context of the element
  item.textContent = "hello";
  p.textContent = "csdc";

  //inserting element in th dom

  list.append(item, p);
});
