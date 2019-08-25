import Either from "./static-land/Either";
import makeDataConstructor from "./makeDataConstructor";

export default makeDataConstructor ({
  canonicalModule: Either,
  tag: "Left",
  contains: ["value"]
});
