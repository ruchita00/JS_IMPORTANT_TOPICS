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

//this

function sayHelloJS() {
  console.log(this); //global
}

// sayHelloJS();

//example of this

/*
This:
1.Function invocation = this is the window object
2.method are defined as normal functions: this points to the current 
//object
method defined using arrow function: this point to window
Arrow function borrow the this from its lexical scope 
*/

//this
function sayHello() {
  const child = () => {
    console.log(this); //window object
  };
  child();
}

// sayHello();
//this for functions/arrow function in the global
// scope is window object
//arrow function solves the problem of this
//shorter syntax
const sayHi = () => {
  console.log("hello world");
};

// sayHi();

// const obj = {
//   a: 1,
//   b: 2,
//   fn: function () {
//     console.log(this);
//   },
//   fn2: () => {
//     console.log(this);
//   },
// };

// obj.fn();
// obj.fn2();

const obj1 = {
  a: 1,
  b: 2,
  fn: function () {
    const fn2 = () => {
      console.log(this);
    };
    fn2();
  },
};
obj1.fn();
