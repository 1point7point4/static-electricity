/* # combinators/compose
 *
 * Added in v0.0.2-alpha
 *
 * Immediately returns any argument it recieves.
 *
 * ```js
 * compose (x => x * 3) (x => x + 1) (3); // → 12
 * compose (x => `I love ${x}`) (x => `${x} swords.`) ("bacon"); // → "I love bacon swords."
 * ```
 */

const compose = f => g => x => f (g (x));

export default compose;
