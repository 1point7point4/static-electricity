import Maybe from "./static-land/Maybe";
import makeDataConstructor from "./makeDataConstructor";

export default makeDataConstructor ({
  canonicalModule: Maybe,
  tag: "Left",
  contains: ["value"]
});
