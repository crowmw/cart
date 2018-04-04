import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCartOrders, getCartPrice } from '../selectors/cartSelector'

class Cart extends Component {
  render() {
    const { orders, price } = this.props
    return (
      <div className="Cart">
        {`Suma: ${price}zł`}
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              {`${order.pizza} - ${order.size} - ${Object.keys(
                order.topping
              ).map(topping => `${topping}: ${order.topping[topping]}`)} - ${
                order.price
              }zł`}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapState = state => {
  return {
    orders: getCartOrders(state),
    price: getCartPrice(state)
  }
}

export default connect(mapState)(Cart)
