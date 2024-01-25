// 1.
var name = "hello";

//global scope
function local() {
  //local scope
  console.log(name);
}

local();

//2/
let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1; //shadowing
    console.log(count);
  }
  console.log(count);
})();

//3 write a function that would allow you to do this

function createBase(num) {
  return function (innerNum) {
    console.log(innerNum + num);
  };
}

var addSix = createBase(6);
addSix(10); //returns 16
addSix(21); //returns 27

//4 time optimization

function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

const closure = find();
closure(5);

//5
// function a() {
for (var i = 0; i < 3; i++) {
  function inner(i) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
  inner(i);
}
// }

// a();

//6

//6 how would u used a closure to create a private counter

function counter() {
  var _counter = 0;

  function add(increment) {
    _counter += increment;
  }
  function retrive() {
    return "Counter = " + _counter;
  }

  return { add, retrive };
}

const c = counter();
c.add(5);
c.add(10);
console.log(c.retrive());

//7 make this run only once
//once polyfill -lodash library

function once(func, context) {
  let ran;

  return function () {
    if (func) {
      ran = func.apply(context || this.arguments);
      func = null;
    }
    return ran;
  };
}

const hello = once(() => console.log("hello"));

hello();
