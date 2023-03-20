const assertArraysEqual = function(arr1, arr2) {
  let equal = eqArrays(arr1, arr2);
  let result = "";
  if (equal) {
    result += `✅ Assertion Passed: [${arr1}] === [${arr2}]`;
  } else {
    result += `🛑 Assertion Failed: [${arr1}] === [${arr2}]`;
  }
  return result;
};

const eqArrays = require('./eqArrays');

module.exports = assertArraysEqual;


