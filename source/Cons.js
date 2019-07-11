import List from "./static-land/List";
import makeDataConstructor from "./makeDataConstructor";

const Cons_ = makeDataConstructor ({
  canonicalModule: List,
  tag: "Cons",
  contains: ["head", "tail"]
});

const Cons = head => tail => {
  if (tail.type !== "List") throw Error ("Expected a value of type `List`");

  return Cons_ (head) (tail);
};

export default Cons;
