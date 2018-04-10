import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import './homeSectionStyle.css'

const homeSection = props => {
  return (
    <div className='home-section'>
      <div className='home-section-header'>
        <h2>{props.title}</h2>
        <Icon type="right" />
      </div>
      <div className='home-section-content'>
        CONTENT
      </div>
    </div>
  )
}

homeSection.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default homeSection