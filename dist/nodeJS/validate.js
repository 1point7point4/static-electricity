"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* # validate
 *
 * Added in v0.0.2-alpha
 *
 * Validates objects based on an expected format.
 *
 * ```js
 * const validateEmployee = validate ({
 *   name: String,
 *   // Property names with an asterisk at the end are optional.
 *   "age*": x => typeof x === "number" && x >= 16,
 * });
 *
 * validateEmployee ({
 *   name: Infinity,
 *   age: 72601,
 * }); // TypeError: Expected option "name" to have type `String`
 *
 * validateEmployee ({
 *   name: "Jeffrey McJeffington",
 *   age: -1,
 * }); // Error: Invalid values for option "age"
 *
 * validateEmployee ({
 *   name: "Bob the slob",
 *   age: 19
 * }); // → {name: "Bob the slob", age: 19}
 *
 * validateEmployee ({
 *   name: "Anon1234"
 * }); // → {name: "Anon1234"}
 * ```
 */
const validate = expectedFormat => options => {
  Object.entries(expectedFormat).forEach(([optionName_, predicate]) => {
    let required = true;
    let optionName;

    if (optionName_[optionName_.length - 1] === "*") {
      optionName = optionName_.slice(0, -1);
      optional = false;
    } else optionName = optionName_;

    if (!{}.hasOwnProperty.call(options, optionName)) {
      if (required) throw Error(`Missing option "${optionName}"`); // Check if the "predicate" is actually a constructor
    } else if (predicate.prototype) {
      if (!(options[optionName] instanceof predicate.prototype)) {
        throw TypeError(`Expected option "${optionName}" to have type \`${expectedFormat[optionName].name}\``);
      }
    } else if (!predicate(options[optionName])) {
      throw Error(`Invalid value for option "${optionName}"`);
    }
  }); // Returning this allows us to compose `validate (x)` with other functions

  return options;
};

var _default = validate;
exports.default = _default;