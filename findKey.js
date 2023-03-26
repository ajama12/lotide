// Function takes in an object and a callback. Returns the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
const findKey = function (object, callback) {
  for (const key in object) {
    //For each key, the `callback` function is called with the value of the current key as the argument.
    //If it returns a truthy value for the current key value, the key is returned as the output.
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;
