import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Hero from '../../components/hero/hero'
import Categories from '../categories/categories'
import HomeSection from '../../components/homeSection/homeSection'

import SizeChange from '../sizeChange'
import ToppingSelect from '../toppingSelect'
import Cart from '../cart'

import { fetchPizzas } from '../../actions/pizza/pizzaActions'
import { fetchTopping } from '../../actions/topping/toppingActions'
import { fetchPizzaSizes } from '../../actions/size/sizeActions'
import { currentPizzaChange } from '../../actions/current/currentActions'
import { addCurrentToCart } from '../../actions/cart/cartActions'

import { getPizzaEntitiesArray } from '../../selectors/pizzaSelector'
import { getCurrentPizza, getCurrentPrice } from '../../selectors/currentSelector'

import './appStyle.css'
import logo from '../../assets/image/logo.png'

class App extends Component {
  componentWillMount() {
    this.props.fetchPizzas()
    this.props.fetchTopping()
    this.props.fetchPizzaSizes()
  }

  handlePizzaClick = pizza => {
    this.props.currentPizzaChange(pizza.id)
  }

  handleAddToCartClick = () => {
    this.props.addCurrentToCart()
  }

  render() {
    const { pizzas, currentPizza, currentPrice } = this.props

    return (
      <div className='container'>
        <div id='topbar'>
          <img src={logo} alt='pizzeria-logo' id='logo' />
        </div>
        <div className='main-section'>
          <Hero />
          <Categories />
        </div>
        <HomeSection title='nowości' />
        <HomeSection title='najpopularniejsze' />
        <HomeSection title='polecane' />
      </div>
    )

    // if (pizzas.length > 0) {
    //   return (
    //     <div className="App">
    //       <ul>
    //         {pizzas.map((pizza, index) => {
    //           return (
    //             <li
    //               key={index}
    //               style={{
    //                 marginBottom: '1em',
    //                 cursor: 'pointer',
    //                 background: currentPizza === pizza.id ? '#cccccc' : ''
    //               }}
    //               onClick={() => this.handlePizzaClick(pizza)}
    //             >
    //               <div>
    //                 {`${pizza.name} - ${pizza.description} - (${
    //                   pizza.price[0]
    //                 } - ${pizza.price[pizza.price.length - 1]} zł)`}
    //               </div>
    //               <div>{pizza.topping.map(topping => `${topping.name}, `)}</div>
    //             </li>
    //           )
    //         })}
    //       </ul>
    //       {currentPizza && <SizeChange />}
    //       {currentPizza && <ToppingSelect />}
    //       {currentPizza && (
    //         <button onClick={this.handleAddToCartClick}>
    //           Dodaj do koszyka
    //         </button>
    //       )}
    //       {currentPizza && currentPrice}
    //       <Cart />
    //     </div>
    //   )
    // } else {
    //   return null
    // }
  }
}

const mapState = state => {
  return {
    pizzas: getPizzaEntitiesArray(state),
    currentPizza: getCurrentPizza(state),
    currentPrice: getCurrentPrice(state)
  }
}

const mapDispatch = dispatch => {
  return bindActionCreators(
    {
      fetchPizzas,
      fetchTopping,
      fetchPizzaSizes,
      currentPizzaChange,
      addCurrentToCart
    },
    dispatch
  )
}

export default connect(mapState, mapDispatch)(App)
