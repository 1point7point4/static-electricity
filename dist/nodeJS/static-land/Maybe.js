"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _match = _interopRequireDefault(require("../match2"));

var _Canon = _interopRequireDefault(require("./Canon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Maybe = {
  typeName: "Maybe",
  liftEquals1: equals => (0, _match.default)({
    Nothing_Nothing: _ => _ => true,
    Just_Just: ({
      value: a
    }) => ({
      value: b
    }) => equals(a)(b),
    _: _ => _ => false
  }),
  liftLte1: lte => (0, _match.default)({
    Just_Nothing: _ => _ => false,
    Just_Just: ({
      value: a
    }) => ({
      value: b
    }) => lte(a)(b),
    _: _ => _ => true
  }),
  liftShow1: show => match({
    Nothing: _ => "Nothing",
    Just: ({
      value
    }) => `Just (${show(value)})`
  }),
  map: f => match({
    Nothing: x => x,
    Just: ({
      value
    }) => Just(f(value))
  }),
  foldl: f => acc => match({
    Nothing: _ => acc,
    Just: ({
      value
    }) => f(value)(acc)
  })
};
console.log("log: ", "this works");
Maybe.equals = Maybe.liftEquals1(_Canon.default.equals);
Maybe.lte = Maybe.liftLte1(_Canon.default.lte);
Maybe.show = Maybe.liftLte1(_Canon.default.show);
var _default = Maybe;
exports.default = _default;