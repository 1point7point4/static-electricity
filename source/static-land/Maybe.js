import match2 from "../match2";
import Canon from "./Canon";
import Nothing from "../Nothing";
import Just from "../Just";

const Maybe = {

  typeName: "Maybe",

  liftEquals1: equals => match2 ({
    Nothing_Nothing: _ => _ => true,
    Just_Just: ({value: a}) => ({value: b}) => equals (a) (b),
    _: _ => _ => false
  }),

  liftLte1: lte => match2 ({
    Just_Nothing: _ => _ => false,
    Just_Just: ({value: a}) => ({value: b}) => lte (a) (b),
    _: _ => _ => true
  }),

  liftShow1: show => match ({
    Nothing: _ => "Nothing",
    Just: ({value}) => `Just (${show (value)})`
  }),

  map: f => match ({
    Nothing: _ => Nothing,
    Just: ({value}) => Just (f (value))
  }),

  foldl: f => acc => match ({
    Nothing: _ => acc,
    Just: ({value})
};

Maybe.equals = liftEquals1 (Canon.equals);
Maybe.lte = liftLte1 (Canon.lte);
Maybe.show = liftLte1 (Canon.show);

export default Maybe;
