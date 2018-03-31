import * as types from "../actionTypes";

export const currentPizzaChange = id => {
  return {
    type: types.CURRENT_PIZZA_CHANGE,
    id
  };
};

export const currentSizeChange = size => {
  return {
    type: types.CURRENT_SIZE_CHANGE,
    size
  }
}

export const currentToppingsChange = (id, quantity = 1) => {
  return {
    type: types.CURRENT_TOPPINGS_CHANGE,
    id, quantity
  }
}
