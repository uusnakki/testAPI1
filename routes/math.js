var express = require('express');
var router = express.Router();

var sumAll = require('../public/javascripts/sumAll')
var isPrime = require('../public/javascripts/isPrime')

const allNumbers = []

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(allNumbers);
});

/* POST integer functions. */
router.post('/', function(req, res, next) {
  //testArr = [0,1,2,3]
  const arr = req.body.content
  console.log(arr)
  
  const s = sumAll(arr)
  console.log(s)
  
  const p = isPrime(s)
  console.log(p)
  allNumbers.push(s,p)
  res.send('Array counted!');
});

module.exports = router;
