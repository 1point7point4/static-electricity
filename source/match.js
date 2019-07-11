const match = strMap => (x) => {
  if (x == null || x.tag == null) {
    const err = "Missing `tag` property";
    throw err;
  }

  const {tag} = x;

  if (tag in strMap) return strMap[tag] (x);

  if ("_" in strMap) return strMap._ (x);

  throw Error (`Unexpected tag "${tag}"`);
};

export default match;
