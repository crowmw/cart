import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { currentSizeChange } from '../actions/current/currentActions'

import { getCurrentSize } from '../selectors/currentSelector'
import { getSizePizzaSizes } from '../selectors/sizeSelector'

class SizeChange extends Component {
  handleChange = (e, value) => {
    const { sizes, currentSizeChange } = this.props
    const sizesArray = Object.values(sizes)
    currentSizeChange(sizesArray[e.currentTarget.value].size)
  }

  render() {
    const { currentSize, sizes } = this.props
    const max = Object.keys(sizes).length - 1
    const defaultValue = Object.keys(sizes).indexOf(currentSize)

    return (
      <div className="SizeChange">
        {currentSize}
        <input
          type="range"
          min="0"
          max={max}
          step="1"
          defaultValue={defaultValue}
          onInput={this.handleChange}
        />
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return bindActionCreators(
    {
      currentSizeChange
    },
    dispatch
  )
}

const mapState = state => {
  return {
    currentSize: getCurrentSize(state),
    sizes: getSizePizzaSizes(state)
  }
}

export default connect(mapState, mapDispatch)(SizeChange)
