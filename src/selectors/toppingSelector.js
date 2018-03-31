import { createSelector } from 'reselect'

export const getToppingEntities = state => state.topping.entities

export const getToppingEntitiesArray = createSelector(
  getToppingEntities,
  entities => Object.values(entities)
)
