"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* # combinators/always
 *
 * Added in v0.0.2-alpha
 *
 * Takes two arguments, and returns the first one.
 *
 * ```js
 * const infoAbout = always ("A figment of your imagination.");
 *
 * infoAbout ("bacon"); // → "A figment of your imagination"
 * infoAbout ("necktie"); // → "A figment of your imagination"
 * ```
 */
const always = x => _ => x;

var _default = always;
exports.default = _default;