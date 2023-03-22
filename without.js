//Function returns the desired portion of an array and removes elements that are not needed
const without = function (sourceArray, itemsToRemoveArray) {
  let resultArray = [];

  for (let i = 0; i < sourceArray.length; i++) {
    //If the element is an object, recursively call without on that object to remove the specified items.
    if (sourceArray[i] instanceof Object) {
      resultArray.push(without(sourceArray[i], itemsToRemoveArray));
    } else if (!itemsToRemoveArray.includes(sourceArray[i])) {
      //If the element is not an object and is not in the items to remove array, add it to `resultArray`.
      resultArray.push(sourceArray[i]);
    }
  }
  return resultArray;
};

module.exports = without;
