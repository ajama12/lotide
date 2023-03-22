//Function that takes array and callback function, returns new array using results of callback function
const map = function (array, callback) {
  const results = [];
  for (const item of array) {
    //Call the callback function with the current item as its argument, and push the result to the `results` array.
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
