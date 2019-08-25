import Id from "./CompositionId.js";

const supportId = ({id, compose}) => {

  // See [NOTE: values of type `() -> a`] at "static-land/Canon.js".
  const idValue = id ();

  return x => (y) => {

    if (x === Id) {
      if (y === Id) return idValue;
      return y;
    }
    if (y === Id) return x;

    return compose (x) (y);
  };
};

export default supportId;
