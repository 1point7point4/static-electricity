"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* NOTE:
 * In a statically typed language like Haskell, it's possible to replace terms
 * with their actual equivalent of a certain type at compile time (i.e. replace
 * `mempty` with its list version `[]`). In JS, we can not do this, but we can
 * fake it.
 *
 * We fake it by creating frozen objects (like the one below this note), then
 * creating a "supporter" in a separate file (supportEmpty.js in this case).
 * When the "supporter" is called with a module as an argument, it returns a
 * modified version of the appropriate method from the module (`concat` in this
 * case) that replaces any occurences of the frozen object with the appropriate
 * value that it corresponds to.
 *
 * Example:
 * ```javascript
 * const {supportEmpty} = require ("static-electricity");
 *
 * const ArrayModule = {
 *   empty: () => [],
 *   concat: array1 => array2 => array1.concat (array2)
 * };
 * ArrayModule.concat = supportEmpty (ArrayModule);
 * ```
 */
var _default = Object.freeze({
  tag: "Empty"
});

exports.default = _default;