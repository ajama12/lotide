const eqObjects = require("../eqObjects");
const assertObjectsEqual = require("../assertObjectsEqual");


assertObjectsEqual(
  { make: "Honda", model: "Civic", color: "red" },
  { color: "red", make: "Honda", model: "Civic" }
);
assertObjectsEqual(
  { make: "Honda", model: "Civic", color: "red" },
  { color: "blue", make: "Nissan", model: "Maxima" }
);

