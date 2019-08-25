import MinBound from "./MinBound.js";
import MaxBound from "./MaxBound.js";

const supportBounded = ({minBound, maxBound, lte, equals}) => {

  // See [NOTE: values of type `() -> a`] at "static-land/Canon.js"
  const minBoundValue = minBound ();
  const maxBoundValue = maxBound ();

  return x => (y) => {

    /* `x` is definitely less than or equal to `y` if `x` is as small as
     * possible or `y` is as large as possible.
     */
    if (x === minBoundValue || y === maxBoundValue) return true;

    /* If `x` is as large as possible or `y` is as small as possible, `x` can
     * only be less than or equal to `y` if they are equal.
     */
    if (x === maxBoundValue || y === minBoundValue) return equals (x) (y);

    return lte (x) (y);
  };
};

export default supportBounded;
