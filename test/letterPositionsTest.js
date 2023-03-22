const assertArraysEqual = require("../assertArraysEqual");
const letterPositions = require("../letterPositions");

//test code 
console.log(assertArraysEqual(letterPositions("hello").h, [0]));
console.log(assertArraysEqual(letterPositions("hello").e, [1]));
console.log(assertArraysEqual(letterPositions("hello").l, [2, 3]));
console.log(assertArraysEqual(letterPositions("hello").o, [4]));
