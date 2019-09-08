const compose = require ("../dist/nodejs/combinators/compose").default;
const assert = require ("assert");

describe (
  "compose",
  () => {
    it (
      "Should compose right-to-left",
      () => {
        const number = Math.random ();

        assert.equal (
          compose (x => x * 3) (x => x + 1) (number),
          (number + 1) * 3
        );
        assert.equal (
          compose (x => `I love ${x}`) (x => `${x} swords.`) ("bacon"),
          "I love bacon swords."
        );
      }
    );
  }
);
