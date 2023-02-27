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

const middle = function(array) {
  let length = array.length;

  if (length < 3) {
    return [];
  } else if (length % 2 === 0) {
    return [array[Math.round(length / 2) - 1], array[Math.round(length / 2)]];
  } else if (length % 2 === 1) { 
    return [array[Math.floor(length / 2)]];

  }
};

  console.log(middle([1, 2, 3]));
  console.log(middle([1, 2, 3, 4, 5]));
  console.log(middle([1, 2, 3, 4]));
  console.log(middle([1, 2, 3, 4, 5, 6]));



