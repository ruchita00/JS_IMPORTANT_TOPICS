//map polyfill

const numbers = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.myFunction = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const square = numbers.myFunction((num) => {
  return num * 2;
});

console.log(square);

//polyfill for filter

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const morethanTwo = numbers.myFilter((num) => {
  return num > 2;
});

console.log(morethanTwo);

//polyfill for reduce

Array.prototype.myReduce = function (cb, initialValue) {
  var accumlator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumlator = accumlator ? cb(accumlator, this[i], i, this) : this[i];
  }
  return accumlator;
};

const sum = numbers.myReduce((acc, curr) => {
  return acc + curr;
});

console.log(sum);
