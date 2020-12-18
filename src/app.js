const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');

const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');

const {
  getNthElement,
  arrayToCSVString,
  // csvStringToArray,
  addToArray,
  // addToArray2,
  removeNthElement,
  // numbersToStrings,
  // uppercaseWordsInArray,
  // reverseWordsInArray,
  // onlyEven,
  // removeNthElement2,
  elementsStartingWithAVowel,
  // removeSpaces,
  // sumNumbers,
  // sortByLastLetter,
} = require('./lib/arrays');

const app = express();

app.use(express.json());

// Below is the strings section

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).send({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).send({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).send({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (!req.query.length) {
    res.status(200).send({ result: firstCharacter(req.params.string) });
  } else {
    res.status(200).send({ result: firstCharacters(req.params.string, req.query.length) });
  }
});

// Below is the numbers section

// Below are the add tests

app.get('/numbers/add/:firstNumber/and/:secondNumber', (req, res) => {
  const firstNumber = parseInt(req.params.firstNumber);
  const secondNumber = parseInt(req.params.secondNumber);

  if (isNaN(firstNumber, secondNumber)) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).send({ result: add(firstNumber, secondNumber) });
  }
});

// Below are the subtract tests

app.get('/numbers/subtract/:firstNumber/from/:secondNumber', (req, res) => {
  const firstNumber = parseInt(req.params.firstNumber);
  const secondNumber = parseInt(req.params.secondNumber);

  if (isNaN(firstNumber, secondNumber)) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).send({ result: subtract(secondNumber, firstNumber) });
  }
});

// Below are the multiple tests

app.post('/numbers/multiply', (req, res) => {
  const numberA = parseInt(req.body.a);
  const numberB = parseInt(req.body.b);

  if (!req.body.a || !req.body.b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(numberA, numberB)) {
    res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).send({ result: multiply(numberA, numberB) });
  }
});

// Below are the divide tests

app.post('/numbers/divide', (req, res) => {
  const numberA = parseInt(req.body.a);
  const numberB = parseInt(req.body.b);

  if (req.body.b === 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  } else if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(numberA, numberB)) {
    res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).send({ result: divide(numberA, numberB) });
  }
});

// Below are the remainder tests

app.post('/numbers/remainder', (req, res) => {
  const numberA = parseInt(req.body.a);
  const numberB = parseInt(req.body.b);

  if (req.body.b === 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  } else if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(numberA, numberB)) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).send({ result: remainder(numberA, numberB) });
  }
});

// Below are the booleans tests

app.post('/booleans/negate', (req, res) => {
  res.status(200).send({ result: negate(req.body.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).send({ result: truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  const number = parseInt(req.params.number);

  if (isNaN(number)) {
    res.status(400).send({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).send({ result: isOdd(number) });
  }
});

app.get('/booleans/:cat/starts-with/:c', (req, res) => {
  if (req.params.c.length > 1) {
    res.status(400).send({ error: 'Parameter "character" must be a single character.' });
  } else {
    res.status(200).send({ result: startsWith(req.params.c, req.params.cat) });
  }
});

// Below are the arrays tests

app.post('/arrays/element-at-index/:index', (req, res) => {
  const index = parseInt(req.params.index);
  res.status(200).send({ result: getNthElement(index, req.body.array) });
});

app.post('/arrays/to-string', (req, res) => {
  res.status(200).send({ result: arrayToCSVString(req.body.array) });
});

app.post('/arrays/append', (req, res) => {
  res.status(200).send({ result: addToArray(req.body.value, req.body.array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  res.status(200).send({ result: elementsStartingWithAVowel(req.body.array) });
});

app.post('/arrays/remove-element', (req, res) => {
  const remove = req.query.index;
  res.status(200).send({ result: removeNthElement(remove, req.body.array) });
});

module.exports = app;
