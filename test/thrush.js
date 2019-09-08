const thrush = require ("../dist/nodejs/combinators/thrush").default;
const assert = require ("assert");

describe (
  "thrush",
  () => {
    it (
      "Should apply the second argument to the first one",
      () => {
        assert.equal (thrush (4) (x => x * 2), 4 * 2);
        assert.equal (thrush ("bacon") (x => `${x} swords`), "bacon swords");
      }
    );
  }
);
