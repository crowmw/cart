import currentReducer, * as reducer from './currentReducer'
import * as types from '../../actions/actionTypes'

describe('currentReducer', () => {
  it('should return initial state', () => {
    expect(currentReducer(undefined, {})).toEqual(reducer.initialState)
  })

  describe('pizza', () => {
    it('should set current pizza id on CURRENT_PIZZA_CHANGE', () => {
      const expected = 'margherita'

      const action = {
        type: types.CURRENT_PIZZA_CHANGE,
        id: expected
      }

      expect(reducer.pizza(reducer.initialState.pizza, action)).toEqual(
        expected
      )
    })

    it('should clear on CART_ADD_CURRENT', () => {
      const expected = reducer.initialState.pizza

      const current = {
        pizza: 'farmerska',
        size: '45',
        toppings: {
          'sos-pomidorowy': 2,
          pieczarki: 1
        }
      }

      const action = {
        type: types.CART_ADD_CURRENT,
        current
      }

      expect(reducer.pizza('farmerska', action)).toEqual(expected)
    })
  })

  describe('size', () => {
    it('should set current size on CURRENT_SIZE_CHANGE', () => {
      const expected = 30

      const action = {
        type: types.CURRENT_SIZE_CHANGE,
        size: 30
      }

      expect(reducer.size(reducer.initialState.size, action)).toEqual(expected)
    })

    it('should set smallest pizza size on FETCH_SIZE_SUCCESS', () => {
      const expected = 30

      const action = {
        type: types.FETCH_PIZZA_SIZES_SUCCESS,
        pizzaSize: {
          30: {
            id: 30,
            name: 'mała',
            size: 30
          },
          40: {
            id: 40,
            name: 'srednia',
            size: 40
          }
        }
      }

      expect(reducer.size(reducer.initialState.size, action)).toEqual(expected)
    })
  })

  describe('topping', () => {
    it('should change toppings on CURRENT_TOPPINGS_CHANGE', () => {
      const expected = {
        pieczarki: 1
      }

      const action = {
        type: types.CURRENT_TOPPINGS_CHANGE,
        id: 'pieczarki',
        quantity: 1
      }

      expect(reducer.topping(reducer.initialState.toppings, action)).toEqual(
        expected
      )
    })

    it('should increment value if topping existed on CURRENT_TOPPINGS_CHANGE', () => {
      const expected = {
        pieczarki: 2
      }

      const action = {
        type: types.CURRENT_TOPPINGS_CHANGE,
        id: 'pieczarki',
        quantity: 1
      }

      expect(reducer.topping({ pieczarki: 1 }, action)).toEqual(expected)
    })

    it('should remove topping when topping have 2 on CURRENT_TOPPINGS_CHANGE', () => {
      const expected = {}

      const action = {
        type: types.CURRENT_TOPPINGS_CHANGE,
        id: 'pieczarki',
        quantity: 1
      }

      expect(reducer.topping({ pieczarki: 2 }, action)).toEqual(expected)
    })

    it('should clear on CART_ADD_CURRENT', () => {
      const expected = reducer.initialState.topping

      const current = {
        pizza: 'farmerska',
        size: '45',
        toppings: {
          'sos-pomidorowy': 2,
          pieczarki: 1
        }
      }

      const action = {
        type: types.CART_ADD_CURRENT,
        current
      }

      expect(reducer.topping('farmerska', action)).toEqual(expected)
    })
  })
})
