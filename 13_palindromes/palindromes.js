const palindromes = function (str = "") {
  str = str.toLowerCase();
  let isChar = function (char) {
    if (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9")
    )
      return true;
    return false;
  };
  for (let l = 0, r = str.length - 1; l < r; ) {
    if (!isChar(str[l])) {
      l++;
      continue;
    } else if (!isChar(str[r])) {
      r--;
      continue;
    }

    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;

// palindromes('ZZZZ car, a man, a maracaz.')
