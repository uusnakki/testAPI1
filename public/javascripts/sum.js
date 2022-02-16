function sumAll(arr1) {
    var i;
    var sum = 0;
    for (i = 0; i < arr1.length; i++) {
      sum += arr1[i];
    }
    return sum;
  }

  module.exports = sumAll;
