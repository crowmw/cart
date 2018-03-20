import * as types from "../../actions/actionTypes";
import { combineReducers } from "redux";

export const initialState = {
  pizza: null
};

export const pizza = (state = initialState.pizza, action) => {
  switch (action.type) {
    case types.CURRENT_PIZZA_CHANGE:
      return action.id;
    default:
      return state;
  }
};

const currentReducer = combineReducers({
  pizza
});

export default currentReducer;
