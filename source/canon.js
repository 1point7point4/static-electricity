import Null from "./static-land/Null";
import NumberModule from "./static-land/Number";
import BooleanModule from "./static-land/Boolean";
import StringModule from "./static-land/String";
import SymbolModule from "./static-land/Symbol";
import FunctionModule from "./static-land/Function";

const typeofTable = {
  undefined: {
    typeName: "Undefined",
    eq: x => y => x === y,
    show: _ => "undefined"
  },
  number: NumberModule,
  boolean: BooleanModule,
  string: StringModule,
  symbol: SymbolModule,
  function: FunctionModule
}

const canon = x => {
  if (x === null) return Null;

  if (typeof x["static-land/canonical"] === "function") {
    return x["static-land/canonical"];
  }

  if (typeofTable.hasOwnProperty (typeof x)) return typeofTable[x];

  // TODO: Support other builtin types.like `Array`.

  throw Error (`${x} does not have a valid canonical module`);
};

export default canon;
