import toppingReducer, * as reducer from './toppingReducer'
import * as types from '../../actions/actionTypes'

describe('toppingReducer', () => {
  it('should return initial state', () => {
    expect(toppingReducer(undefined, {})).toEqual(reducer.initialState)
  })

  describe('entities', () => {
    it('should set topping entities on FETCH_TOPPING_SUCCESS', () => {
      const expected = {
        'sos-pomidorowy': {
          id: 'sos-pomidorowy',
          index: 0,
          name: 'sos pomidorowy',
          type: 'sauce',
          description: 'Sos wykonany z pomidorów'
        }
      }

      const action = {
        type: types.FETCH_TOPPING_SUCCESS,
        topping: {
          'sos-pomidorowy': {
            id: 'sos-pomidorowy',
            index: 0,
            name: 'sos pomidorowy',
            type: 'sauce',
            description: 'Sos wykonany z pomidorów'
          }
        }
      }

      expect(reducer.entities(reducer.initialState.entities, action)).toEqual(
        expected
      )
    })
  })

  describe('isFetching', () => {
    it('should set true on FETCH_TOPPING', () => {
      const expected = true

      const action = {
        type: types.FETCH_TOPPING
      }

      expect(
        reducer.isFetching(reducer.initialState.isFetching, action)
      ).toEqual(expected)
    })

    it('should set false on FETCH_TOPPING_SUCCESS', () => {
      const expected = false

      const action = {
        type: types.FETCH_TOPPING_SUCCESS
      }

      expect(
        reducer.isFetching(reducer.initialState.isFetching, action)
      ).toEqual(expected)
    })
    it('should set false on FETCH_TOPPING_ERROR', () => {
      const expected = false

      const action = {
        type: types.FETCH_TOPPING_ERROR
      }

      expect(
        reducer.isFetching(reducer.initialState.isFetching, action)
      ).toEqual(expected)
    })
  })
})
