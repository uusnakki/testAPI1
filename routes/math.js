var express = require('express');
var router = express.Router();

var sumAll = require('../public/javascripts/sum')

const allNumbers = []

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(allNumbers);
});

/* POST integer functions. */
router.post('/', function(req, res, next) {
  testArr = [0,1,2,3]
  console.log(testArr)
  
  const s = sumAll(testArr)
  console.log(s)
  allNumbers.push(s)
  res.send('<h1>{$s}</h1>');
});

module.exports = router;
