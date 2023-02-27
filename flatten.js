const assertArraysEqual = function(arr1, arr2) {
  let equal = eqArrays(arr1, arr2);
  let result = "";
  if (equal) {
    result += `✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`;
  } else {
    result += `🛑🛑🛑 Assertion Failed: [${arr1}] === [${arr2}]`;
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

const flatten = function(sourceArray) {
  let resultArray = [];

  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] instanceof Array) {
      Array.prototype.push.apply(resultArray, flatten(sourceArray[i]));
    } else {
      resultArray.push(sourceArray[i]);
    }
  }
  return resultArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));