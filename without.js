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

const without = function(sourceArray, itemsToRemoveArray) {
  let resultArray = [];

  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] instanceof Object) {
      resultArray.push(without(sourceArray[i], itemsToRemoveArray));
    } else if (!itemsToRemoveArray.includes(sourceArray[i])) {
      resultArray.push(sourceArray[i]);
    }
  }
  return resultArray;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
