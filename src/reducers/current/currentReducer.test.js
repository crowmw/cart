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
  })
})
