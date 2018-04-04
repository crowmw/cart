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
        topping: {
          'sos-pomidorowy': 2,
          pieczarki: 1
        },
        price: 22
      }

      const pizza = {
        entities: {
          farmerska: {
            price: [16]
          }
        }
      }

      const topping = {
        entities: {
          'sos-pomidorowy': {
            price: '2'
          },
          pieczarki: {
            price: '2'
          }
        }
      }

      const size = {
        pizzaSizes: {
          '45': {
            id: '45',
            name: 'srednia',
            size: '45'
          }
        }
      }

      const expectedActions = [
        {
          type: types.CART_ADD_CURRENT,
          current
        }
      ]

      const store = mockStore({ current, pizza, topping, size })

      store.dispatch(actions.addCurrentToCart())

      return expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
