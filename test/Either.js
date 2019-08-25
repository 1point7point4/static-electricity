const Either = require ("../dist/nodejs/static-land/Either").default;
const Left = require ("../dist/nodejs/Left").default;
const Right = require ("../dist/nodejs/Right").default;
const assert = require ("assert");
const canon = "static-land/canonical";

console.log ("EITHER",Either);

describe (
  "Either",
  () => {

    describe (
      `equals`,
      () => {
        it (
          "Exists",
          () => assert (Either.equals != null)
        );

        it (
          "Either.equals (Left (x)) (Left (x))",
          () => assert (Either.equals (Left ("x")) (Left ("x")))
        );

        it (
          "!Either.equals (Left (x)) (Left (y))",
          () => assert (!Either.equals (Left ("x")) (Left ("y")))
        );
      }
    );
  }
);
