const amalgamate = require ("../dist/nodejs/combinators/amalgamate").default;
const assert = require ("assert");

describe (
  "substitution",
  () => {
    it (
      "Should take three arguments, then apply the first to the third and the result of the second applied to the third",
      () => {
        const number = Math.random ();

        assert.equal (
          amalgamate (x => y => x + y) (x => x / 2) (number),
          number + (number / 2)
        )

        const string = "why would you want to use this in real life? no idea";
        const chant = amalgamate (x => y => `${y} ${x}!`) (y => `${y}!`);

        assert.equal (chant (string), `${string}! ${string}!`);
      }
    );
  }
);
