// 1.how to find duplicate elements in given array?

const arrNumber = [1, 2, 8, 2, 9, 8];

const duplicates = arrNumber.filter(
  (ele, index, arr) => arr.indexOf(ele) !== index
);

console.log(duplicates);

// 2.how to find max and minimum value in given array in js?

const arrayNum = [7, 9, 87, 65, 876];

//find maximum number
const maxFunction = (arr) => {
  return arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
  });
};

console.log(maxFunction(arrayNum));

//find minimum number
const minFunction = (arr) => {
  return arr.reduce((prev, curr) => {
    return prev < curr ? prev : curr;
  });
};

console.log(minFunction(arrayNum));

//what is the difference between == and === in js?
//both are comparison operator
//the difference between both are operators is that == is used to
//compare values whereas === is used to compare both value and types.

var x = 7;
var y = "7";

console.log(x == y); //true
console.log(x === y); //false

//4.How  to find second largest value and remove first largest
// value in array

//find largest value from array
//find index of largest value
//delete index from array using splice method
//apply same logic that use for find largest value

const intArray = [2, 8, 9, 7];

//find secound largestvalue
const largestValue = (arr) => {
  firstLargestValue = Math.max(...arr);
  index = arr.indexOf(firstLargestValue);
  arr.splice(index, 1);
  secoundLargestValue = Math.max(...arr);
  return secoundLargestValue;
};

console.log(largestValue(intArray));

// 5. what is the difference between filter method and find method?
// filter method returns the matched values in an array from the collection
//find method return the first value that matches from the collection once
//it matches the value in findings it will not check the remaining values
//in the array

const emparr = [
  {
    name: "king",
    ae: 42,
  },
  {
    name: "ali",
    age: 32,
  },
  {
    name: "ahmed",
    age: 22,
  },
  {
    name: "ayesha",
    age: 52,
  },
  {
    name: "hafsa",
    age: 28,
  },
  {
    name: "sadi",
    age: 22,
  },
  {
    name: "rohma",
    age: 26,
  },
  {
    name: "masooma",
    age: 95,
  },
];

const filteredItem = emparr.filter((item) => {
  return item.age > 30;
});
console.log(filteredItem);

const findItems = emparr.find((item) => {
  return item.age > 30;
});
console.log(findItems);

// 6. how to find missing number in a given integer array of 1 to 10

const arraMissingArray = [1, 2, 3, 4, 5, 6, 9, 10];
const arraMissingArrayElemenet = [];
// find the missing value in the given array

const findMissingValue = (arr) => {
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);
  for (let i = minValue; i < maxValue; i++) {
    if (arr.indexOf(i) < 0) {
      arraMissingArrayElemenet.push(i);
    }
  }
  return arraMissingArrayElemenet;
};

console.log(findMissingValue(arraMissingArray));

//7.How to find even or odd number in given array in javascript

const numbers = [1, 2, 3, 8, 9, 12, 16];
//find even numbers
const even = numbers.filter((item) => {
  return item % 2 === 0;
});
console.log("even numbers:", even);

//find odd numbers
const odd = numbers.filter((item) => {
  return item % 2 !== 0;
});
console.log("odd numbers", odd);

//8.how to find sum of all elements in given array[] in javascript?

const arrSumNum = [1, 9, 6, 4];
const sumOfNumbers = (arr) => {
  return arr.reduce((prev, curr) => {
    return prev + curr;
  });
};
console.log(sumOfNumbers(arrSumNum));

//9.How to find factorial of given number in js

//the factorial of number is the product of all number from 1 to that
//number
//ex 5!=1*2*3*4*5=120
//factorial of negiavtive number is not possible

// const inputNum = prompt("enter number");

// let fact;
// if (inputNum < 0) {
//   console.log(`factorial is ${inputNum} is not possible`);
// } else {
//   for (let i = 1; i <= inputNum; i++) {
//     fact = fact * i;
//   }
//   //   console.log(`factorial of 50inputNum} is ${fact}`);
// }

//10. write a function that returns the reverse of string

const reversestr = (str) => {
  let revserstring = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revserstring = revserstring + str[i];
  }
  return revserstring;
};

console.log(reversestr("ruchi"));

//or
function reverseString(str) {
  return str.split(" ").reverse().join();
}

console.log(reverseString("my"));

//11. what is the output of the following program

function abc() {
  console.log(a);
  var a = 10;
}

abc();
// output: undefined;

// function abc() {
//   console.log(a, b, c);
//   const c = 30;
//   let b = 20;
//   var a = 10;
// }

// abc();
// output: const and let are also hoisted but not hoisted like var they
//are hoisted in temporial dead zone

//12.what is the difference between map and forEach()

// both are array function to loop through on array
//map created new array
//foreach does not return any value so map is return value
//foreach is just like normal for loop
//map does not modify original array it return new array
//forEach can modify the original array

const arr = [2, 5, 3, 4, 7];

const mapResult = arr.map((ar) => {
  return ar + 2;
});

const foreachResult = arr.forEach((ar, i) => {
  arr[i] = ar + 3;
});

console.log(mapResult, arr);
console.log(foreachResult);

//13.return only name of students in capital

let students = [
  { name: "piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

let name = [];
for (let i = 0; i < students.length; i++) {
  name.push(students[i].name.toUpperCase());
}
console.log(name);

const names = students.map((student) => student.name.toUpperCase());

console.log(names);

//14 return only details of those who scored more than 60 marks

const nameofStudent = students.filter((student) => student.marks > 60);

console.log(nameofStudent);

//15/ more than 60 marks and rollnumber grather than 15

const questionNum = students.filter((student) => {
  return student.marks > 60 && student.rollNumber > 15;
});

console.log(questionNum);

//16 sum of marks of all the students

const sumofStudeent = students.reduce((acc, curr) => acc + curr.marks, 0);

console.log(sumofStudeent);

//17 return only names of students who scored more than 60

const questionEve = students
  .filter((student) => {
    return student.marks > 60;
  })
  .map((name) => name.name);

console.log(questionEve);

//18. return total marks for students with marks grather than 60
//after 20 marks have been added to those who scored less than 60

const total = students
  .filter((student) => {
    if (student.marks < 60) {
      student.marks = student.marks + 20;
    }
    return student;
  })
  .filter((stu) => {
    return stu.marks > 60;
  })
  .reduce((acc, curr) => {
    return acc + curr.marks;
  }, 0);

console.log(total);
