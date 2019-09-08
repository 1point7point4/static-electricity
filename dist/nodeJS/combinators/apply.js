"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* # combinators/apply
 *
 * Added in v0.0.2-alpha
 *
 * Applies a function to an argument.
 *
 * ```js
 * apply (x => `I like ${x}.`) ("trains"); // → "I like trains."
 * ```
 */
const apply = f => x => f(x);

var _default = apply;
exports.default = _default;