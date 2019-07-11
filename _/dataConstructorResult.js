// This is an internal function so it's relatively okay to have it uncurried
const dataConstructorResult = (dataConstructorArguments, canon, tag) => {
  const result = {
    get "static-land/canonical" () {
      return canon;
    },
    get tag () {
      return tag;
    }
  };

  for (let i = 0; i < dataConstructorArguments.length; i += 1) {
    result[canon[i]] = dataConstructorArguments[i];
  }

  return result;
};

export default dataConstructorResult;
