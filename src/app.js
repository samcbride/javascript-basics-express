const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');

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

module.exports = app;
