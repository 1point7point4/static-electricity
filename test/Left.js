const Left = require ("../dist/nodejs/Left").default;
const assert = require ("assert");

describe (
  "Left",
  () => {
    const canon = "static-land/canonical";

    describe (
      `#${canon}`,
      () => {
        const Maybe = require ("../dist/nodejs/static-land/Maybe").default;

        it (
          "should be `Maybe` from `source/static-land/Maybe`",
          () => assert.equal (Left (123)[canon], Maybe)
        );
      }
    )
  }
);
