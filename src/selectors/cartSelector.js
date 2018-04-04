import { createSelector } from 'reselect'

export const getCartOrders = state => state.cart.order

export const getCartPrice = createSelector(getCartOrders, orders => {
  let price = 0
  for (let order of orders) {
    price += order.price
  }

  return price
})
