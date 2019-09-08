const thrush = require ("../dist/nodejs/combinators/thrush").default;
const assert = require ("assert");

describe (
  "thrush",
  () => {
    it (
      "Should apply the second argument to the first",
      () => {
        const n = Math.random ();
        assert.equal (thrush (n) (x => x + 1), n + 1);
        assert.equal (thrush ("bacon") (x => `${x} swords`), "bacon swords");
      }
    );
  }
);
