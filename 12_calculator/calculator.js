const add = function (a = 0, b = 0) {
  return a + b;
};

const subtract = function (a = 0, b = 0) {
  return a - b;
};

const sum = function (arr = []) {
  // return arr.reduce((sum, num)=> (sum + num), 0); // corrent one
  let sum = 0;
  arr.forEach((item, inex, arr) => (sum += item));
  return sum;
};

const multiply = function (arr = []) {
  return arr.reduce((result, num) => result * num, 1);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (num) {
  let result = num == 0 ? 1 : num;
  while (--num > 0) {
    result *= num;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
