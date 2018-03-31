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
    default:
      return state
  }
}

export const size = (state = initialState.size, action) => {
  switch (action.type) {
    case types.CURRENT_SIZE_CHANGE:
      return action.size
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
