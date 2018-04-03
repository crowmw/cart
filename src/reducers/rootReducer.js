import { combineReducers } from 'redux'
import PizzaReducer from './pizza/pizzaReducer'
import ToppingReducer from './topping/toppingReducer'
import CurrentReducer from './current/currentReducer'
import CartReducer from './cart/cartReducer'

export const rootReducer = combineReducers({
  pizza: PizzaReducer,
  topping: ToppingReducer,
  current: CurrentReducer,
  cart: CartReducer
})

export default rootReducer
