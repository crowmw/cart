import { normalize } from "normalizr";
import { arrayOfPizzaSchema } from "../../utils/normalizrSchema";
import * as types from "../actionTypes";
import api from "../../utils/api";

export const fetchPizzas = () => (dispatch, getState) => {
  dispatch({ type: types.FETCH_PIZZA });
  return api("/pizza")
    .then(res => {
      const normalized = normalize(res.data, arrayOfPizzaSchema);
      return dispatch({
        type: types.FETCH_PIZZA_SUCCESS,
        ...normalized.entities
      });
    })
    .catch(error => {
      console.error(error);
      debugger;
    });
};
