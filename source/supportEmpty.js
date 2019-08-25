import Empty from "./Empty.js";

const supportEmpty = ({empty, concat}) => {

  // See [NOTE: values of type `() -> a`] at "static-land/Canon.js"
  const emptyValue = empty ();

  return x => (y) => {
    if (x === Empty) {
      if (y === Empty) return emptyValue;
      return y;
    }
    
    if (y === Empty) return x;
    return concat (x) (y);
  };
};

export default supportEmpty;
