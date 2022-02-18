var express = require('express');
var router = express.Router();

var sumAll = require('../public/javascripts/sumAll')
var isPrime = require('../public/javascripts/isPrime')

const allNumberObjects = []

/* GET users listing. */
router.get('/multipleprime', function (req, res, next) {
  res.send(allNumberObjects);
});

/* POST integer functions. 
* Gets numbers as strings
* Modifies numbers to an array
* Uses sum function to sum the numbers
* Checks if the sum is a prime number
* Sends the numObject to the server,
where one can check the sum and if it is prime
*/

router.post('/multipleprime', function (req, res, next) {
  const requestedNumbers = req.body.content
  const arr = Array.from(String(requestedNumbers), Number);
  const sumValue = sumAll(arr)
  const primeValue = isPrime(sumValue)

  const numObject = {
    intValue: sumValue,
    isPrime: primeValue
  }
  allNumberObjects.push(numObject)
  res.send({numObject: numObject});
});

module.exports = router;
