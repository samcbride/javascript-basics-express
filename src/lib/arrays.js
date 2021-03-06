const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
  return array;
};

const addToArray2 = (element, array) => {
  const array2 = array.concat(element);
  return array2;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
  return array;
};

const numbersToStrings = numbers => {
  return numbers.toString().split(',');
};

const uppercaseWordsInArray = strings => {
  return strings
    .toString()
    .toUpperCase()
    .split(',');
};

const reverseWordsInArray = strings => {
  return strings.Map(newString => {
    return newString
      .split('')
      .reverse()
      .join('');
  });
};

const onlyEven = numbers => {
  return numbers.filter(newNumber => newNumber % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const copyArray = array.slice(0, array.length);
  copyArray.splice(index, 1);
  return copyArray;
};

// OPTION 1 //
const elementsStartingWithAVowel = strings => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const items = [];
  for (let i = 0; i < vowels.length; i += 1) {
    for (let j = 0; j < strings.length; j += 1) {
      if (strings[j].charAt(0) === vowels[i]) {
        items.push(strings[j]);
      }
    }
  }
  return items;
};

const removeSpaces = string => {
  const reggy = string.replace(/\s/g, '');
  return reggy;
};

const sumNumbers = numbers => {
  const add = (x, y) => x + y;
  return numbers.reduce(add);
};

const sortByLastLetter = strings => {
  strings.sort((x, y) => x.charCodeAt(x.length - 1) - y.charCodeAt(y.length - 1));
  return strings;
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
