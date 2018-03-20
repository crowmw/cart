import { combineReducers } from "redux";
import PizzaReducer from "./pizza/pizzaReducer";
import ToppingReducer from "./topping/toppingReducer";
import CurrentReducer from "./current/currentReducer";

export const rootReducer = combineReducers({
  pizza: PizzaReducer,
  topping: ToppingReducer,
  current: CurrentReducer
});

export default rootReducer;
