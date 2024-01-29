//Hoisting
//Hoisting is a process in js in which variable declarations
//and function definition are hoisted at the top of thier
//respective scopes

sayHello();
function sayHello() {
  console.log(x);
  var x = 2;
}

//let and const are also hoisted
var a = 2;
function b() {
  a = 3;
  return a;
  function a() {
    console.log(a);
  }
}
console.log(b(), a);

var a = 2;
function b() {
  a = 3;
  return a;
}
console.log(b(), 2);

//mozilaa
//2015 _es6 (ecmascript)

//Advantages of ES6:

//1.Template literals
//2.Default parameter

function sum(a = 0, b = 0) {
  return a + b;
}

const result = sum(2);
console.log(result);

//3.Destructuring
//4.Arrow function
//this keyword -patym, zomato,splicker,cleartrip,makemytrip

//function definition(hoist)
function x() {
  ///
  console.log("x");
}

x();

//function expression (dont hoist)
let fn = function () {
  console.log("I am a function expression");
};
