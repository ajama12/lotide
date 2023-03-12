const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(str) {
  let result = {};
  
  str.split('').forEach(element => {
    result[element] = 0;
  });

  str.split('').forEach(letter => {
    result[letter] ++;
  });

  return result;
};

  

console.log(countLetters("lighthouse in the house"));
