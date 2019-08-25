const assert = require ("assert");

describe (
  "NodeJS distribution",
  () => {


    describe (
      "index.js",
      () => {
        let staticElectricity;

        it (
          "Can be imported without syntax errors",
          () => {
            staticElectricity = require ("../dist/nodejs/index");
          }
        );

        it (
          "Exports an object",
          () => typeof staticElectricity === "object"
        )
      }
    );
  }
);
