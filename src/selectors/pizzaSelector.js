import { createSelector } from 'reselect'
import { getToppingEntities } from './toppingSelector'

export const getPizzaEntities = state => state.pizza.entities

export const getPizzaEntity = (state, id) => getPizzaEntities(state)[id]

export const getPizzaEntitiesArray = createSelector(
  getPizzaEntities,
  getToppingEntities,
  (pizzas, toppings) => {
    if (Object.keys(pizzas).length > 0 && Object.keys(toppings).length > 0) {
      let pizzasArray = Object.values(pizzas).sort((a, b) => a.index - b.index)

      return pizzasArray
        ? pizzasArray.map((pizza, index) => {
            pizza.topping = pizza.topping.map(
              (topping, index) => toppings[topping]
            )
            return pizza
          })
        : []
    } else {
      return []
    }
  }
)
