const assertEqual = require("../assertEqual");
const findKey = require("../findKey");

//test code
assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ),
  "noma"
); 

assertEqual(
  findKey(
    {
      actor1: "Chadwick Boseman",
      actor2: "Angela Bassett",
      actor3: "Michael B Jordan",
    },
    (x) => x === "Chadwick Boseman"
  ),
  "actor1"
);
