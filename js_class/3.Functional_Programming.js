//this
function sayHello() {
  function child() {
    console.log(this); //window object
  }
  child();
}

sayHello();
//this for functions/arrow function in the global
// scope is window object
//arrow function solves the problem of this
//shorter syntax
const sayHi = () => {
  console.log("hello world");
};

sayHi();

//Functional Programming
//oops programming is not fast
//think of your program in modular functions
//functions should do one thing do one thing only

//sum
//sub
//mulitiplication
//division
//module
//sin,cost,tan

//Pure function and impure functions

//Interview question
let name = "mohit";

function changeName() {
  name = "mmohit"; //impure functions
}

function changeNametwo() {
  console.log(name); //pure function it does not have side
  //effect outside the fn
}

changeName();
changeNametwo();

//Pure function is a function which is not side effect
//in the code

// side Effects : changes that can happends ouside of the
//function

//ex2

let name1 = "mohit";

function change(name1) {
  name1 = "kamal";
  return name1;
}
const res1 = change(name1);
const res2 = change(name1);
console.log(res1, res2);
console.log(name1);

/*pure function : 
1.fixed output for fixed input (predictable)
2.should do only one thing at a time
3.Not having any side effects outside
*/

function sum(a, b) {
  var mul = a * b;
  return a + b; //impure function
}

function mul(x) {
  return x * 5;
}

function add(x) {
  return x + 5;
}

function sub(x) {
  return x - 5;
}

function pow(x) {
  return x ** 4;
}

function calculate(x) {
  //   let mul = x * 5;
  //   let add = mul + 2;
  //   let sub = add - 1;
  //   let pow = sub ** 4;

  let ans = pow(sub(add(mul(x))));
  return ans;
}

const result = calculate(2);
console.log(result);
