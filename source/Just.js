import Maybe from "./static-land/Maybe";
import makeDataConstructor from "./makeDataConstructor";

const Just = makeDataConstructor ({
  canonicalModule: Maybe,
  tag: "Just",
  contains: ["value"]
});

export default Just;
