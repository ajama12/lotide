const assertEqual = require("../assertEqual");
const tail = require("../tail");
const assert = require("chai").assert;

//test
describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
});
