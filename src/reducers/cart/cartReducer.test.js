import cartReducer, * as reducer from './cartReducer'
import * as types from '../../actions/actionTypes'

describe('cartReducer', () => {
  it('should return initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(reducer.initialState)
  })

  describe('order', () => {
    it('should add current pizza to order on CART_ADD_CURRENT', () => {
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

      const expected = [current]

      expect(reducer.order(reducer.initialState.order, action)).toEqual(
        expected
      )
    })
  })
})
