const apply = require ("../dist/nodejs/combinators/apply").default;
const assert = require ("assert");

describe (
  "apply",
  () => {
    it (
      "Should apply a function to an argument",
      () => {
        assert.equal (apply (x => x * 2) (4), 4 * 2);
        assert.equal (apply (x => `${x} swords`) ("bacon"), "bacon swords");
      }
    );
  }
);
