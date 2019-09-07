"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* # combinators/amalgamate
 *
 * Added in v0.0.2-alpha
 *
 * Takes three arguments, then applies the first to a) the third and the result of
 * the second applied to the third.
 *
 *
 * ```js
 * const addToHalf = amalgamate (x => y => x + y) (y => y / 2);
 *
 * addToHalf (2); // → 3
 *
 * const chant = amalgamate (x => y => `${y} ${x}!`) (y => `${y}!`);
 *
 * chant ("bacon"); // → "bacon! bacon!"
 * ```
 */
const amalgamate = f => g => x => f(x)(g(x));

var _default = amalgamate;
exports.default = _default;