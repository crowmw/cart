import React, { Component } from 'react'
import pizzaIcon from '../../assets/icons/pizza.svg'
import './categoriesStyle.css'

class categories extends Component {
  render() {
    return (
      <ul className='categories-list'>
        <li className='category-item'>
          <div className='category-icon-container'>
            <img src={pizzaIcon} alt='pizza category' />
          </div>
          <span>Pizza</span>
        </li>

        <li className='category-item'>
          <div className='category-icon-container'>
            <img src={pizzaIcon} alt='pizza category' />
          </div>
          <span>Pizza</span>
        </li>

        <li className='category-item'>
          <div className='category-icon-container'>
            <img src={pizzaIcon} alt='pizza category' />
          </div>
          <span>Pizza</span>
        </li>

        <li className='category-item'>
          <div className='category-icon-container'>
            <img src={pizzaIcon} alt='pizza category' />
          </div>
          <span>Pizza</span>
        </li>

        <li className='category-item'>
          <div className='category-icon-container'>
            <img src={pizzaIcon} alt='pizza category' />
          </div>
          <span>Pizza</span>
        </li>

      </ul>
    )
  }
}

export default categories