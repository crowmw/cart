import pizzaReducer, * as reducer from './pizzaReducer'
import * as types from '../../actions/actionTypes'

describe('pizza reducer', () => {
  it('should return initial state', () => {
    expect(pizzaReducer(undefined, {})).toEqual(reducer.initialState)
  })

  describe('entities', () => {
    it('should set pizza entities on FETCH_PIZZA_SUCCESS', () => {
      const expected = {
        margherita: {
          id: 'margherita',
          index: 0,
          name: 'Margherita',
          description: 'Pizza sos ser',
          topping: ['sos-pomidorowy', 'ser'],
          price: [16, 22, 29, 32]
        }
      }

      const action = {
        type: types.FETCH_PIZZA_SUCCESS,
        pizza: {
          margherita: {
            id: 'margherita',
            index: 0,
            name: 'Margherita',
            description: 'Pizza sos ser',
            topping: ['sos-pomidorowy', 'ser'],
            price: [16, 22, 29, 32]
          }
        }
      }

      expect(reducer.entities(reducer.initialState.entities, action)).toEqual(
        expected
      )
    })
  })

  describe('isFetching', () => {
    it('should set true on FETCH_PIZZA', () => {
      const expected = true

      const action = {
        type: types.FETCH_PIZZA
      }

      expect(
        reducer.isFetching(reducer.initialState.isFetching, action)
      ).toEqual(expected)
    })
    it('should set false on FETCH_PIZZA_SUCCESS', () => {
      const expected = false

      const action = {
        type: types.FETCH_PIZZA_SUCCESS
      }

      expect(
        reducer.isFetching(reducer.initialState.isFetching, action)
      ).toEqual(expected)
    })
    it('should set false on FETCH_PIZZA_ERROR', () => {
      const expected = false

      const action = {
        type: types.FETCH_PIZZA_ERROR
      }

      expect(
        reducer.isFetching(reducer.initialState.isFetching, action)
      ).toEqual(expected)
    })
  })
})
