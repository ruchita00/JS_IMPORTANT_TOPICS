// //Object in js
// const fun = (function (a) {
//   delete a;
//   return a;
// })(5);

// console.log(func);

//arithmatic expression on strings

//+,-,*,/, %

console.log(2 + "ruchi");
//i am seeing a + with a string : possiblity of concatenation
//but i am also getting a number
//i can go ahead and convert the number into a string and then
//concatenation
//console.log(2 + "ruchi");
//2ruchi

console.log(2 + 34 - "ruchi");
//console.log(36-'ruchi')
//NaN
//any arthmatic operation apart from + then u should  calculate
//the value
//NaN

console.log(2 + 34 / "ruchi");
console.log(2 + 34 * "ruchi");

console.log(2 + 34 / "ruchi" + "Acedamy"); //NaNaAcedamy
console.log(2 + 34 / "ruchi" + "Acedamy" + true); //NaNAcedamytrue

console.log("Acedamy" + true + 1); //Acedamytrue1
console.log(true + 1 + "Acedamy"); //2Acedamy
//any true value transform to non zero number
//ex 34,2,1,=true
//ex -3.-3=false

console.log(true + "String"); //trueString
console.log(true - "String"); //NaN
console.log(6 + "6"); //66
//+6 convert it into number
console.log(6 + +"6"); //12

console.log(1 - -1); //2
