import * as types from "../actionTypes";

export const currentPizzaChange = id => {
  return {
    type: types.CURRENT_PIZZA_CHANGE,
    id
  };
};
