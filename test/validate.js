const validate = require ("../dist/nodejs/validate").default;
const assert = require ("assert");

describe (
  "validate",
  () => {
    const validateEmployee = validate ({
      name: String,
      "age*": x => typeof x === "number" && x >= 16,
    });

    const employees = {
      Ω: {
        name: Infinity,
        age: 72601,
      },
      jeff: {
        name: "Jeffrey McJeffington",
        age: -1,
      },
      blank: {},
      bob: {
        name: "Bob the slob",
        age: 19,
      },
      anon: {
        name: "Anon1234",
      },
    };

    it (
      "Should ensure that values have the proper type",
      () => assert.throws (
        () => validateEmployee (employees.Ω),
        TypeError ("Expected option \"name\" to have type `String`")
      )
    );

    it (
      "Should ensure that values are valid according to the expected format",
      () => assert.throws (
        () => validateEmployee (employees.jeff),
        "Invalid values for option \"age\""
      )
    );

    it (
      "Should ensure that all required properties are filled in",
      () => assert.throws (
        () => validateEmployee (employees.blank),
        Error ("Missing option \"name\"")
      )
    );

    it (
      "Should return valid objects instead of throwing an error",
      () => assert.equal (validateEmployee (employees.bob), employees.bob)
    );

    it (
      "Should return valid objects that do not fill in optional parameters, instead of throwing an error",
      () => assert.equal (validateEmployee (employees.anon), employees.anon)
    );
  }
);
