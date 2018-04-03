import { createSelector } from 'reselect'
import { getPizzaEntities } from './pizzaSelector'
import { getSizePizzaSizes } from './sizeSelector'

export const getCurrentPizza = state => state.current.pizza

export const getCurrentSize = state => state.current.size

export const getCurrentPizzaPrice = createSelector(
  [getPizzaEntities, getSizePizzaSizes, getCurrentPizza, getCurrentSize],
  (pizzaEntities, pizzaSizes, pizza, size) => {
    const selectedSizeIndex = Object.keys(pizzaSizes).indexOf(size.toString())
    const currentPizzaPrices = pizzaEntities[pizza].price
    return currentPizzaPrices[selectedSizeIndex]
  }
)
