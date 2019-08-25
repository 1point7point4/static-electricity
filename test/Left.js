const Left = require ("../dist/nodejs/Left").default;
const assert = require ("assert");
const canon = "static-land/canonical";

describe (
  "Left",
  () => {

    describe (
      `#${canon}`,
      () => {
        const Either = require ("../dist/nodejs/static-land/Either").default;

        it (
          "should be `Either` from `source/static-land/Either`",
          () => assert.equal (Left ("foo")[canon], Either)
        );
      }
    );
  }
);
