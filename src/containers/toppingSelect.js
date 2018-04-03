import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getToppingEntitiesArray } from '../selectors/toppingSelector'

import { currentToppingsChange } from '../actions/current/currentActions'

class ToppingSelect extends Component {
  handleToppingClick = id => {
    this.props.currentToppingsChange(id)
  }

  render() {
    const { toppings } = this.props
    return (
      <div
        className="ToppingSelect"
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        {toppings.map((topping, index) => {
          return (
            <div
              className="topping"
              style={{
                border: '1px solid grey',
                margin: 3,
                padding: 5,
                cursor: 'pointer'
              }}
              key={index}
              onClick={() => this.handleToppingClick(topping.id)}
            >
              {topping.name}
            </div>
          )
        })}
      </div>
    )
  }
}

const mapState = state => {
  return {
    toppings: getToppingEntitiesArray(state)
  }
}

const mapDispatch = dispatch => {
  return bindActionCreators(
    {
      currentToppingsChange
    },
    dispatch
  )
}

export default connect(mapState, mapDispatch)(ToppingSelect)
