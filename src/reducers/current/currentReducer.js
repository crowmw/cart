import * as types from '../../actions/actionTypes'
import { combineReducers } from 'redux'

export const initialState = {
  pizza: null,
  size: 0,
  topping: {}
  // price: 0
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
    // case types.CART_ADD_CURRENT:
    //   return initialState.size
    case types.FETCH_PIZZA_SIZES_SUCCESS:
      return Object.values(action.pizzaSize)[0].size
    default:
      return state
  }
}

export const topping = (state = initialState.topping, action) => {
  switch (action.type) {
    case types.CURRENT_TOPPINGS_CHANGE:
      if (state[action.id] === 2) {
        delete state[action.id]
        return { ...state }
      } else {
        return {
          ...state,
          [action.id]: state[action.id] ? state[action.id] + 1 : action.quantity
        }
      }
    case types.CART_ADD_CURRENT:
      return initialState.topping
    default:
      return state
  }
}

// export const price = (state = initialState.price, action) => {
//   switch (action.type) {
//     case types.CURRENT_PIZZA_CHANGE:
//     case types.CURRENT_SIZE_CHANGE:
//       return action.price
//     case types.CART_ADD_CURRENT:
//       return initialState.price
//     case types.CURRENT_TOPPINGS_CHANGE:
//     default:
//       return state
//   }
// }

const currentReducer = combineReducers({
  pizza,
  size,
  topping
  // price
})

export default currentReducer
