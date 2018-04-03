import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import mockAdapter from 'axios-mock-adapter'
import api from '../../utils/api'
import axios from 'axios'
import * as actions from './cartActions'
import * as types from '../actionTypes'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const mock = new mockAdapter(api)

describe('cartActions', () => {
  describe('cartAddCurrentToCart', () => {
    it('should create CART_ADD_CURRENT action', () => {
      const current = {
        pizza: 'farmerska',
        size: '45',
        toppings: {
          'sos-pomidorowy': 2,
          pieczarki: 1
        }
      }

      const expectedActions = [
        {
          type: types.CART_ADD_CURRENT,
          current
        }
      ]

      const store = mockStore({ current })

      store.dispatch(actions.addCurrentToCart())

      return expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
