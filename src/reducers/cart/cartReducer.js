import * as types from '../../actions/actionTypes'
import { combineReducers } from 'redux'

export const initialState = {
  order: []
}

export const order = (state = initialState.order, action) => {
  switch (action.type) {
    case types.CART_ADD_CURRENT:
      return [...state, action.current]
    default:
      return state
  }
}

const cartReducer = combineReducers({
  order
})

export default cartReducer
