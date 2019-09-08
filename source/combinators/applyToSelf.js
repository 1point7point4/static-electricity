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

const applyToSelf = f => f (f);

export default applyToSelf;
