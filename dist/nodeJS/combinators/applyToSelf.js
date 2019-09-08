"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* # combinators/applyToSelf
 *
 * Added in v0.0.2-alpha
 *
 * Applies a function to itself.
 *
 * ```js
 * applyToSelf (console.log); // Logs `console.log`.
 *
 * applyToSelf (const ("Bacon")); // → "Bacon"
 *
 * applyToSelf (const (id)); // → id
 * ```
 */
const applyToSelf = f => f(f);

var _default = applyToSelf;
exports.default = _default;