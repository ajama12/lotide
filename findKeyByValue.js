//Function takes in an object and returns the first key with the given value. Otherwise returns undefined
const findKeyByValue = function (object, value) {
  const keys = Object.keys(object);
  for (const key of keys) {
    //Checks if the value of the key-value pair matches the `value` parameter.
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;