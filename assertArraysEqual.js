const eqArrays = require("./eqArrays");

//Function that compares arrays using previous eqArrays function
const assertArraysEqual = function (arr1, arr2) {
  let equal = eqArrays(arr1, arr2);
  let result = "";
  if (equal) {
    result += `✅ Assertion Passed: [${arr1}] === [${arr2}]`;
  } else {
    result += `🛑 Assertion Failed: [${arr1}] === [${arr2}]`;
  }
  return result;
};

module.exports = assertArraysEqual;
