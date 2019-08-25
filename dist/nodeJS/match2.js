"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const match2 = strMap => x => y => {
  if (x == null || x.tag == null) {
    const err = "Missing `tag` property on first argument";
    throw err;
  }

  if (y == null | y.tag == null) {
    const err = "Missing `tag` property on second argument";
    throw err;
  }

  const tags = `${x.tag}_${y.tag}`;
  if (tags in strMap) return strMap[tags](x)(y);
  if ("_" in strMap) return strMap._(x)(y);
  throw Error(`Unexpected tags "${tags}"`);
};

var _default = match2;
exports.default = _default;