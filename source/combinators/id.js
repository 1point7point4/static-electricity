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

export default id;
