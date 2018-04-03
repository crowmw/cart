import * as types from '../../actions/actionTypes'
import { combineReducers } from 'redux'

export const initialState = {
  pizza: null,
  size: 30,
  toppings: {}
}

export const pizza = (state = initialState.pizza, action) => {
  switch (action.type) {
    case types.CURRENT_PIZZA_CHANGE:
      return action.id
    case types.CART_ADD_CURRENT:
      return initialState.pizza
    default:
      return state
  }
}

export const size = (state = initialState.size, action) => {
  switch (action.type) {
    case types.CURRENT_SIZE_CHANGE:
      return action.size
    case types.CART_ADD_CURRENT:
      return initialState.size
    default:
      return state
  }
}

export const toppings = (state = initialState.toppings, action) => {
  switch (action.type) {
    case types.CURRENT_TOPPINGS_CHANGE:
      return {
        ...state,
        [action.id]: state[action.id]
          ? state[action.id] === 2 ? 0 : state[action.id] + 1
          : action.quantity
      }
    case types.CART_ADD_CURRENT:
      return initialState.toppings
    default:
      return state
  }
}

const currentReducer = combineReducers({
  pizza,
  size,
  toppings
})

export default currentReducer
