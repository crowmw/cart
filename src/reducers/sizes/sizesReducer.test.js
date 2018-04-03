import sizesReducer, * as reducer from './sizesReducer'
import * as types from '../../actions/actionTypes'

describe('size reducer', () => {
  it('should return initial state', () => {
    expect(sizesReducer(undefined, {})).toEqual(reducer.initialState)
  })

  describe('pizzaSizes', () => {
    it('should set pizza sizes on FETCH_PIZZA_SIZES_SUCCESS', () => {
      const expected = {
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

      expect(
        reducer.pizzaSizes(reducer.initialState.pizzaSizes, action)
      ).toEqual(expected)
    })
  })
})
