import { normalize } from 'normalizr'

import * as types from '../actionTypes'
import api from '../../utils/api'

import { arrayOfPizzaSizeSchema } from '../../utils/normalizrSchema'

export const fetchPizzaSizes = () => (dispatch, getState) => {
  dispatch({ type: types.FETCH_PIZZA_SIZES })
  return api('/sizes')
    .then(res => {
      const normalized = normalize(res.data, arrayOfPizzaSizeSchema)
      return dispatch({
        type: types.FETCH_PIZZA_SIZES_SUCCESS,
        ...normalized.entities
      })
    })
    .catch(error => {
      console.error(error)
      return dispatch({
        type: types.FETCH_PIZZA_SIZES_ERROR,
        error
      })
    })
}
