const assertArraysEqual = function(arr1, arr2) {
  let equal = eqArrays(arr1, arr2);
  let result = "";
  if (equal) {
    result += `✅ Assertion Passed: [${arr1}] === [${arr2}]`;
  } else {
    result += `🛑 Assertion Failed: [${arr1}] === [${arr2}]`;
  }
  console.log(result);
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);