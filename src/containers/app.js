import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SizeChange from './sizeChange'
import ToppingSelect from './toppingSelect'

import { fetchPizzas } from '../actions/pizza/pizzaActions'
import { fetchTopping } from '../actions/topping/toppingActions'
import { currentPizzaChange } from '../actions/current/currentActions'
import { addCurrentToCart } from '../actions/cart/cartActions'

import { getPizzaEntitiesArray } from '../selectors/pizzaSelector'
import { getCurrentPizza } from '../selectors/currentSelector'

class App extends Component {
  componentWillMount() {
    this.props.fetchPizzas()
    this.props.fetchTopping()
  }

  handlePizzaClick = pizza => {
    this.props.currentPizzaChange(pizza.id)
  }

  handleAddToCartClick = () => {
    this.props.addCurrentToCart()
  }

  render() {
    const { pizzas, currentPizza } = this.props

    if (pizzas.length > 0) {
      return (
        <div className="App">
          <ul>
            {pizzas.map((pizza, index) => {
              return (
                <li
                  key={index}
                  style={{
                    marginBottom: '1em',
                    cursor: 'pointer',
                    background: currentPizza === pizza.id ? '#cccccc' : ''
                  }}
                  onClick={() => this.handlePizzaClick(pizza)}
                >
                  <div>
                    {`${pizza.name} - ${pizza.description} - (${
                      pizza.price[0]
                    } - ${pizza.price[pizza.price.length - 1]} zł)`}
                  </div>
                  <div>{pizza.topping.map(topping => `${topping.name}, `)}</div>
                </li>
              )
            })}
          </ul>
          {currentPizza && <SizeChange />}
          {currentPizza && <ToppingSelect />}
          {currentPizza && (
            <button onClick={this.handleAddToCartClick}>
              Dodaj do koszyka
            </button>
          )}
        </div>
      )
    } else {
      return null
    }
  }
}

const mapState = state => {
  return {
    pizzas: getPizzaEntitiesArray(state),
    currentPizza: getCurrentPizza(state)
  }
}

const mapDispatch = dispatch => {
  return bindActionCreators(
    {
      fetchPizzas,
      fetchTopping,
      currentPizzaChange,
      addCurrentToCart
    },
    dispatch
  )
}

export default connect(mapState, mapDispatch)(App)
