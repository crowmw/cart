import * as types from '../actionTypes'
import { getCurrentPrice } from '../../selectors/currentSelector'

export const addCurrentToCart = () => (dispatch, getState) => {
  const state = getState()
  const price = getCurrentPrice(state)

  return dispatch({
    type: types.CART_ADD_CURRENT,
    current: { ...state.current, price }
  })
}
