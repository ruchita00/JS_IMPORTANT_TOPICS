//function in js

//function is declaration
function square() {
  return num * num;
}

//function expression
const a = function () {
  console.log("hello");
};

//annonymous function
// function(){

// }

//named function
const sy = function abn() {
  console.log("hello abn");
};

//first class function
// ability to used function as a value is known as first class function
function multiply(num) {
  return num * num * num;
}

function displayMultiply(fn) {
  console.log(fn(5));
}

displayMultiply(multiply);

//what is immediately invoked function expression
//instead of calling function wrapped this function call pass argment below

(function square(num) {
  console.log(num * num);
})(5);

(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);

//the ability of function to access variable and function lexically out
// of its scope is called closure

//function closure example

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
// output: 10 10 10 10 10 10 10;

//function hoisting

functionName();

function functionName() {
  console.log("hello");
}

//let,const,var hoisting

console.log(x);
var x = 5;

var x = 21;

var fun = function () {
  console.log(x);
  var x = 20;
};

fun(); //undefined

const fb = (a, x, y, ...numbers) => {
  console.log(x, y, numbers);
};
fb(56, 3, 7, 5, 5, 7);

//callback funtion: a callback function is a function passed into another
//function as an argument which invoked inside the outerr function to
//complete some kind of routine or action

document.addEventListener("click", function (params) {});

//arrow function

const add = (firstName, lastName) => firstName + lastName;

// arrow function vs regular function

function squarea(num) {
  return num * num;
}

const squareaa = (nu) => {
  return nu * nu;
};

//implicit return keyword
const squareaaa = (nu) => nu * nu;

//3. argument :

function fn() {
  console.log(arguments);
}

fn(1, 4, 2);

//4.this keyword

let user = {
  username: "hello world",
  rc1: () => {
    console.log(this.username);
  },
  rc2() {
    console.log(this.username);
  },
};

user.rc1();
user.rc2();


























