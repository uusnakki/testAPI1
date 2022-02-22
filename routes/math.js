var express = require('express');
var router = express.Router();

var sumAll = require('../public/javascripts/sumAll')
var isPrime = require('../public/javascripts/isPrime')

const allNumberObjects = []
const isPrimeObject = []

/* GET a prime TRUE or FALSE value */
router.get('/prime', function (req, res, next) {
  res.send(isPrimeObject);
});

/* GET all sums and prime value TRUE or FALSE */
router.get('/multipleprimes', function (req, res, next) {
  res.send(allNumberObjects);
});

/* POST an integer. 
* Gets numbers as strings
* Sends the numObject to the server,
where one can check if the number is a prime number
*/

router.post('/prime', function (req, res, next) {
  const requestedInt = req.body.addIntData
  const isPrimeValue = isPrime(requestedInt)

  const numObject = {
    intValue: requestedInt,
    isPrime:{isPrimeValue} 
  }
  isPrimeObject.push(numObject.isPrime)
  res.send({numObject: numObject});
});

/* POST integer summary. 
* Gets numbers as strings
* Modifies numbers to an array
* Uses sum function to sum the numbers
* Checks if the sum is a prime number
* Sends the numObject to the server,
where one can check the sum and if it is prime
*/

router.post('/multipleprimes', function (req, res, next) {
  const requestedNumbers = req.body.addSumData
  const arr = Array.from(String(requestedNumbers), Number);
  const sumValue = sumAll(arr)
  const isPrimeValue = isPrime(sumValue)

  const numObject = {
    result: sumValue,
    isPrime: isPrimeValue
  }
  allNumberObjects.push(numObject)
  res.send({numObject: numObject});
});

module.exports = router;
