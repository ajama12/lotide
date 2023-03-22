const eqArrays = require("./eqArrays");

// Function that returns true if both objects have identical keys with identical values.
const eqObjects = function (object1, object2) {
  const object1keys = Object.keys(object1);
  const object2keys = Object.keys(object2);
  //Returns false if both objects do not same number of keys
  if (object1keys.length !== object2keys.length) {
    return false;
  }
  for (const key of object1keys) {
    //If both values associated with the current key are arrays, call eqArrays to check if they are equal
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      //If the values associated with the current key are not both arrays, check if they are not equal
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;
