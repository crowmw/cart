import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { currentSizeChange } from '../actions/current/currentActions'

import { getCurrentSize } from '../selectors/currentSelector'

class SizeChange extends Component {
  handleChange = (e, value) => {
    this.props.currentSizeChange(e.currentTarget.value)
  }

  render() {
    const { currentSize } = this.props
    return (
      <div className="SizeChange">
        {currentSize}
        <input
          type="range"
          min="30"
          max="60"
          step="15"
          value={currentSize}
          onChange={this.handleChange}
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
    currentSize: getCurrentSize(state)
  }
}

export default connect(mapState, mapDispatch)(SizeChange)
