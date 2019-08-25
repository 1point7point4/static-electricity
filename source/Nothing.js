import Maybe from "./static-land/Maybe";
import makeDataConstructor from "./makeDataConstructor";

const Nothing = makeDataConstructor ({
  canonicalModule: Maybe,
  tag: "Nothing",
  contains: []
});

export default Nothing;
