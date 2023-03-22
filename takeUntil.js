//Function that takes an array and collects items from the array until the callback returns a truthy value
const takeUntil = function (array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};

module.exports = takeUntil;