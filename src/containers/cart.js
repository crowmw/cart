import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCartOrders } from '../selectors/cartSelector'

class Cart extends Component {
  render() {
    const { orders } = this.props
    return (
      <div className="Cart">
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              {`${order.pizza} - ${order.size} - ${Object.keys(
                order.toppings
              ).map(topping => `${topping}: ${order.toppings[topping]}`)}`}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapState = state => {
  return {
    orders: getCartOrders(state)
  }
}

export default connect(mapState)(Cart)
