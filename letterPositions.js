//Function that returns the indices in the string where each character is found.

const letterPositions = function (string) {
  const results = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      //Check if the current character has been seen before. If it hasn't, create a new empty array to store its positions.
      if (!results[string[i]]) {
        results[string[i]] = [];
      }
      //Add the current character's position to its array.
      results[string[i]].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;
