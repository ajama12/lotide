const assertArraysEqual = require("../assertArraysEqual");
const map = require("../map");

const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(
  map(words, (word) => word[0]),
  ["g", "c", "t", "m", "t"]
);