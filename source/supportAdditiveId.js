import AdditiveId from "./AdditiveId.js";

const supportId = ({additiveId, add}) => {

  // See [NOTE: values of type `() -> a`] at "static-land/Canon.js".
  const additiveIdValue = additiveId ();

  return x => (y) => {

    if (x === AdditiveId) {
      if (y === AdditiveId) return additiveIdValue;
      return y;
    }
    if (y === AdditiveId) return x;

    return add (x) (y);
  };
};

export default supportAdditiveId;
