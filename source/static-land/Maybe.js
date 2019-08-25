import match2 from "../match2";
import Canon from "./Canon";

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
    Nothing: x => x,
    Just: ({value}) => Just (f (value))
  }),

  foldl: f => acc => match ({
    Nothing: _ => acc,
    Just: ({value}) => f (value) (acc)
  })
};

console.log ("log: ", "this works");

Maybe.equals = Maybe.liftEquals1 (Canon.equals);
Maybe.lte = Maybe.liftLte1 (Canon.lte);
Maybe.show = Maybe.liftLte1 (Canon.show);

export default Maybe;
