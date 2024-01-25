//map , filter, reduce

//what is map(): creating new array from existing one

const nums = [1, 2, 3, 4];
const mulitpleThree = nums.map((item) => {
  return item * 3;
});

console.log(mulitpleThree);

//filter only returns those element which fullfilthe provided cirterias

const moreThanTwo = nums.filter((item) => {
  return item > 2;
});
console.log(moreThanTwo);

//what is reduce();

const arr = [1, 2, 3, 4];

const sum = arr.reduce((acc, curr) => {
  return curr + acc;
}, 0);

console.log(sum);

// polyfill for map

const num = [1, 2, 3, 4, 5, 6];

Array.prototype.myFunction = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const square = num.myFunction((num, i, arr) => {
  return num * 2;
});

console.log(square);

//polyfill for filter

Array.prototype.myFunction1 = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};
const numbers = [1, 2, 3, 4, 5, 6];
const morethantwovalue = numbers.myFunction1((num) => {
  return num > 2;
});

console.log(morethantwovalue);

//polyfill for reduce

Array.prototype.myReduce = function (cb, initialValue) {
  var accumlator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumlator = accumlator ? cb(accumlator, this[i], i, this) : this[i];
  }
  return accumlator;
};

const val = [1, 2, 4];

const sumOfNumbers = val.myReduce((ac, prev) => {
  return ac + prev;
});

console.log(sumOfNumbers);
















































