import * as types from "../../actions/actionTypes";
import { combineReducers } from "redux";

export const initialState = {
  entities: {},
  isFetching: false
};

export const entities = (state = initialState.entities, action) => {
  switch (action.type) {
    case types.FETCH_TOPPING_SUCCESS:
      return action.topping;
    default:
      return state;
  }
};

export const isFetching = (state = initialState.isFetching, action) => {
  switch (action.type) {
    case types.FETCH_TOPPING:
      return true;
    case types.FETCH_TOPPING_SUCCESS:
    case types.FETCH_TOPPING_ERROR:
      return false;
    default:
      return state;
  }
};

const toppingReducer = combineReducers({
  entities,
  isFetching
});

export default toppingReducer;
