const negate = a => {
  const b = !a;
  return b;
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
  if (a === false && b === false) {
    return true;
  }
  return false;
};

const one = (a, b) => {
  if (a === b) {
    return false;
  }
  if (a !== b) {
    return true;
  }
};

const truthiness = a => {
  return !!a;
};

const isEqual = (a, b) => {
  return a === b;
};

const isGreaterThan = (a, b) => {
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

const isOdd = a => {
  return a % 2 === 1;
};

const isEven = a => {
  return a % 2 === 0;
};

const isSquare = a => {
  const squareRoot = Math.sqrt(a);
  if (a === 0) {
    return true;
  }
  if (a % squareRoot === 0) {
    return true;
  }
  return false;
};

const startsWith = (char, string) => {
  return char === string.charAt(0);
};

const containsVowels = string => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < vowels.length; i += 1) {
    const trueResult = string.includes(vowels[i]);
    if (trueResult === true) {
      return true;
    }
  }
  return false;
};

const isLowerCase = string => {
  return string === string.toLowerCase();
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
  isLowerCase,
};
