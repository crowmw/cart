import * as types from '../actionTypes'

export const addCurrentToCart = () => (dispatch, getState) => {
  const state = getState()

  return dispatch({
    type: types.CART_ADD_CURRENT,
    current: state.current
  })
}
