const always = require ("../dist/nodejs/combinators/always").default;
const assert = require ("assert");

describe (
  "always",
  () => {
    it (
      "Should take two arguments, and return the first one.",
      () => assert.equal (always ("x") ("y"), "x")
    );
  }
);
