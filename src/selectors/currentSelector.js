import { createSelector } from 'reselect'
import { getPizzaEntities } from './pizzaSelector'
import { getSizePizzaSizes } from './sizeSelector'
import { getToppingEntities } from './toppingSelector'

export const getCurrentPizza = state => state.current.pizza

export const getCurrentSize = state => state.current.size

export const getCurrentTopping = state => state.current.topping

export const getCurrentPizzaTopping = createSelector(
  getCurrentPizza,
  getPizzaEntities,
  (currentPizza, entities) => entities[currentPizza].topping
)

export const getCurrentPizzaPrice = createSelector(
  [getPizzaEntities, getSizePizzaSizes, getCurrentPizza, getCurrentSize],
  (pizzaEntities, pizzaSizes, pizza, size) => {
    if (pizza) {
      const selectedSizeIndex = Object.keys(pizzaSizes).indexOf(size.toString())
      const currentPizzaPrices = pizzaEntities[pizza].price
      return currentPizzaPrices[selectedSizeIndex]
    } else {
      return 0
    }
  }
)

export const getCurrentToppingsPrice = createSelector(
  getCurrentTopping,
  getToppingEntities,
  (current, entities) => {
    let price = 0
    for (let topping of Object.keys(current)) {
      price += entities[topping].price * current[topping]
    }
    return price
  }
)

export const getCurrentPrice = createSelector(
  getCurrentPizzaPrice,
  getCurrentToppingsPrice,
  (pizzaPrice, toppingsPrice) => Number(pizzaPrice) + Number(toppingsPrice)
)
