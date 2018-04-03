import * as types from '../../actions/actionTypes'
import { combineReducers } from 'redux'

export const initialState = {
  pizzaSizes: {}
}

export const pizzaSizes = (state = initialState.pizzaSizes, action) => {
  switch (action.type) {
    case types.FETCH_PIZZA_SIZES_SUCCESS:
      return action.pizzaSize
    default:
      return state
  }
}

const sizesReducer = combineReducers({
  pizzaSizes
})

export default sizesReducer
