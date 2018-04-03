import { combineReducers } from 'redux'
import PizzaReducer from './pizza/pizzaReducer'
import ToppingReducer from './topping/toppingReducer'
import CurrentReducer from './current/currentReducer'
import CartReducer from './cart/cartReducer'
import SizesReducer from './sizes/sizesReducer'

export const rootReducer = combineReducers({
  pizza: PizzaReducer,
  topping: ToppingReducer,
  current: CurrentReducer,
  cart: CartReducer,
  size: SizesReducer
})

export default rootReducer
