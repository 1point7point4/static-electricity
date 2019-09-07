"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* # combinators/id
 *
 * Added in v0.0.2-alpha
 *
 * Immediately returns any argument it recieves.
 *
 * ```js
 * id ("bacon"); // → "bacon"
 * id ("necktie"); // → "necktie"
 * ```
 */
const id = x => x;

var _default = id;
exports.default = _default;