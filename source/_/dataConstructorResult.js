export default (
  (dataConstructorArguments, canonicalModule, type, tag, propertyNames) => {
    const result = {
      get "static-land/canonical" () {
        return canonicalModule;
      },
      get type () {
        return type;
      },
      get tag () {
        return tag;
      }
    };

    for (let index = 0; index < dataConstructorArguments.length; index += 1) {
      result[propertyNames[index]] = dataConstructorArguments[index];
    }

    return result;
  }
)
