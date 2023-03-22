const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");
const takeUntil = require("../takeUntil");

const data1 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
console.log(assertArraysEqual(
  takeUntil(data1, (x) => x === ","),
  ["I've", "been", "to", "Hollywood"]
));
