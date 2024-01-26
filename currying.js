//currying in js
//example f(a,b) into f(a) f(b)

function f(a) {
  return function f(b) {
    return `${a} ${b}`;
  };
}

console.log(f(2)(7));

//currying is technique used in functional programming that allows you to
//transform function with multiple arguments into sequence of functions .

//currying is a function that take 1 arg at a time that returns new function
//expecting the argument.

//question why should we use currying?
//