import * as types from '../actionTypes'
import { getPizzaEntity } from '../../selectors/pizzaSelector'
import { getCurrentPizzaPrice } from '../../selectors/currentSelector'
import { getToppingEntity } from '../../selectors/toppingSelector'

export const currentPizzaChange = id => (dispatch, getState) => {
  const state = getState()
  const pizza = getPizzaEntity(state, id)

  return dispatch({
    type: types.CURRENT_PIZZA_CHANGE,
    id,
    price: pizza.price[0]
  })
}

export const currentSizeChange = size => (dispatch, getState) => {
  const state = getState()
  const price = getCurrentPizzaPrice(state)
  return dispatch({
    type: types.CURRENT_SIZE_CHANGE,
    size,
    price
  })
}

export const currentToppingsChange = (id, quantity = 1) => (
  dispatch,
  getState
) => {
  const topping = getToppingEntity(getState(), id)
  return dispatch({
    type: types.CURRENT_TOPPINGS_CHANGE,
    id,
    quantity,
    price: topping.price
  })
}
