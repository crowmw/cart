import { createSelector } from 'reselect'

export const getToppingEntities = state => state.topping.entities

export const getToppingEntity = (state, id) => getToppingEntities(state)[id]

export const getToppingEntitiesArray = createSelector(
  getToppingEntities,
  entities => Object.values(entities)
)
