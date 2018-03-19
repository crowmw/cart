import { combineReducers } from "redux";
import PizzaReducer from "./pizza/pizzaReducer";

export const rootReducer = combineReducers({
  state: {},
  pizza: PizzaReducer
});

export default rootReducer;
