import canon from "../canon";
import match2 from "../match2";

const Either = {
  typeName: "Either",
  equals: match2 ({
    Left_Left: ({value: x}) => ({value: y}) => canon (x).equals (x) (y),
    Right_Right: ({value: x}) => ({value: y}) => canon (x).equals (x) (y),
    _: _ => _ => false
  }),

};

export default Either;
