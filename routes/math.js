var express = require('express');
var router = express.Router();

var sumAll = require('../public/javascripts/sumAll')
var isPrime = require('../public/javascripts/isPrime')

const allNumberObjects = []

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(allNumberObjects);
});

/* POST integer functions. */
router.post('/', function (req, res, next) {
  const arr = req.body.content
  const sumValue = sumAll(arr)
  const primeValue = isPrime(sumValue)

  const numObject = {
    intValue: sumValue,
    isPrime: primeValue
  }
  allNumberObjects.push(numObject)
  res.send('Array counted!');
});

module.exports = router;
