const fibonacci = function (nth) {
  let first = 1,
    second = 1,
    result = nth == 0 ? 0 : 1;
  result = nth < 0 ? "OOPS" : result;
  
  for (let i = 3; i <= nth; i++) {
    result = first + second;
    first = second;
    second = result;
  }
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
