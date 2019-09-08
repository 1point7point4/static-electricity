const applyToSelf = require ("../dist/nodejs/combinators/applyToSelf").default;
const assert = require ("assert");

describe (
  "applyToSelf",
  () => {
    it (
      "Should apply a function to itself",
      () => {
        const id = x => x;
        assert.equal (applyToSelf (id), id);
      }
    );
  }
);
