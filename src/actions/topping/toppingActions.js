import { normalize } from "normalizr";
import { arrayOfToppingSchema } from "../../utils/normalizrSchema";
import * as types from "../actionTypes";
import api from "../../utils/api";

export const fetchTopping = () => (dispatch, getState) => {
  dispatch({ type: types.FETCH_TOPPING });
  return api("/topping")
    .then(res => {
      const normalized = normalize(res.data, arrayOfToppingSchema);
      return dispatch({
        type: types.FETCH_TOPPING_SUCCESS,
        ...normalized.entities
      });
    })
    .catch(error => {
      console.error(error);
      debugger;
    });
};
