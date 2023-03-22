const flatten = function (sourceArray) {
  let resultArray = [];

  for (let i = 0; i < sourceArray.length; i++) {
    //For each element, the function checks if it is an array
    if (sourceArray[i] instanceof Array) {
      //If the element is an array, the function recursively calls itself, and concatenates the result to the `resultArray`.
      Array.prototype.push.apply(resultArray, flatten(sourceArray[i]));
    } else {
      resultArray.push(sourceArray[i]);
    }
  }
  return resultArray;
};

module.exports = flatten;
