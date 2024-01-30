//reduce:reduce the array in a single value

const arr = [22, 33, 1, 2, 55, 66, 45];

const sum = arr.reduce((curr, acc) => {
  return (acc = curr + acc);
}, 0);

console.log(sum);

const users = [
  { name: "A", salary: "200000" },
  { name: "B", salary: "35000" },
  { name: "C", salary: "150000" },
];

const averageSalary =
  users.reduce((acc, val) => {
    return acc + val.salary;
  }, 0) / users.length;

console.log(averageSalary);
