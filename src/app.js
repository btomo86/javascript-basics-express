const express = require('express');

const app = express();

const {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

app.get('/strings/hello/:string', (req, res) => {
  res.status(200);
  console.log(req.params.string);
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200);
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200);
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (Object.keys(req.query).length === 0) {
    res.status(200).json({ result: firstCharacter(req.params.string) });
  } else {
    res.status(200).json({ result: firstCharacters(req.params.string, req.query.length) });
  }
});

module.exports = app;
