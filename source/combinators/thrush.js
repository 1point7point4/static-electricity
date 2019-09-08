/* # combinators/thrush
 *
 * Added in v0.0.2-alpha
 *
 * Applies the second argument to the first one.
 *
 * ```js
 * thrush ("Yoda") (x => `${x} I am.`); // → "Yoda I am."
 * ```
 */

const thrush = x => f => f (x);

export default thrush;
