import * as types from "../../actions/actionTypes";
import { combineReducers } from "redux";

export const initialState = {
  entities: {},
  isFetching: false
};

export const entities = (state = initialState.entities, action) => {
  switch (action.type) {
    case types.FETCH_PIZZA_SUCCESS:
      return action.pizza;
    default:
      return state;
  }
};

export const isFetching = (state = initialState.isFetching, action) => {
  switch (action.type) {
    case types.FETCH_PIZZA:
      return true;
    case types.FETCH_PIZZA_SUCCESS:
    case types.FETCH_PIZZA_ERROR:
      return false;
    default:
      return state;
  }
};

const pizzaReducer = combineReducers({
  entities,
  isFetching
});

export default pizzaReducer;
