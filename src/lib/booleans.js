const negate = a => {
  return a !== true;
};

const both = (a, b) => {
  if (a === true && b === true) {
    return true;
  }
  return false;
};

const either = (a, b) => {
  if (a === true || b === true) {
    return true;
  }
  return false;
};

const none = (a, b) => {
  return a !== true && b !== true;
};

const one = (a, b) => {
  return a !== b;
};

const truthiness = a => {
  if (a) {
    return true;
  }
  return false;
};

const isEqual = (a, b) => {
  return a == b;
};

const isGreaterThan = (a, b) => {
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

const isOdd = a => {
  return a % 2 == 1;
};

const isEven = a => {
  return a % 2 == 0;
};

const isSquare = a => {
  return Math.sqrt(a) === Math.trunc(Math.sqrt(a));
};

const startsWith = (char, string) => {
  return string.startsWith(char);
};

const containsVowels = string => {
  const vowels = ["a", "e", "i", "o", "u"];
  const arr = string.split("");
  const result = arr.reduce(function(acc, e) {
    const normalised = e.toLowerCase();
    const checked = vowels.find(function(element) {
      return element === normalised;
    });
    if (checked) {
      return true;
    }
    return acc;
  }, false);
  return result;
};

const isLowerCase = string => {
  return string == string.toLowerCase();
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
