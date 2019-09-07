const id = require ("../dist/nodejs/combinators/id").default;
const assert = require ("assert");

describe (
  "always",
  () => {
    it (
      "Should immediately return any argument argument it recieves",
      () => assert.equal (id ("x"), "x")
    );
  }
);
