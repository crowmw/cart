import { createSelector } from 'reselect'

export const getSizePizzaSizes = state => state.size.pizzaSizes

export const getSizePizzaSize = (state, id) => getSizePizzaSizes(state)[id]
