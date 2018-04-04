import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import mockAdapter from 'axios-mock-adapter'
import api from '../../utils/api'
import axios from 'axios'
import * as actions from './currentActions'
import * as types from '../actionTypes'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const mock = new mockAdapter(api)

describe('currentActions', () => {
  describe('currentPizzaChange', () => {
    it('should create CURRENT_PIZZA_CHANGE action with lowest price of pizza', () => {
      const id = 'margherita'
      const price = 16
      const expectedActions = [{ type: types.CURRENT_PIZZA_CHANGE, id, price }]

      const store = mockStore({
        pizza: {
          entities: {
            margherita: {
              price: [price, 20, 25]
            }
          }
        }
      })

      store.dispatch(actions.currentPizzaChange(id))
      return expect(store.getActions()).toEqual(expectedActions)
    })
  })

  describe('currentSizeChange', () => {
    it('should create CURRENT_SIZE_CHANGE action', () => {
      const size = 30
      const price = 16
      const expectedActions = [{ type: types.CURRENT_SIZE_CHANGE, size, price }]

      const store = mockStore({
        pizza: {
          entities: {
            farmerska: {
              price: [16, 20, 30]
            }
          }
        },
        current: {
          pizza: 'farmerska',
          size: 30
        },
        size: {
          pizzaSizes: {
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
      })

      store.dispatch(actions.currentSizeChange(size))
      return expect(store.getActions()).toEqual(expectedActions)
    })
  })

  describe('currentToppingsChange', () => {
    it('should create CURRENT_TOPPINGS_CHANGE', () => {
      const id = 'pieczarki'
      const quantity = 1
      const price = '2'
      const expectedActions = [
        {
          type: types.CURRENT_TOPPINGS_CHANGE,
          id,
          quantity,
          price
        }
      ]

      const store = mockStore({
        topping: {
          entities: {
            pieczarki: {
              id,
              price
            }
          }
        }
      })

      store.dispatch(actions.currentToppingsChange(id))
      return expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

// afterEach(() => {
//   mock.reset();
//   mock.restore();
// });
// describe("fetchPizza", () => {
//   it("creates FETCH_PIZZA_SUCCESS when fetching pizza has been done", () => {
//     const expectedActions = [
//       { type: types.FETCH_PIZZA },
//       {
//         type: types.FETCH_PIZZA_SUCCESS,
//         pizza: {
//           margherita: {
//             id: "margherita",
//             index: 0,
//             name: "Margherita",
//             description: "Pizza sos ser",
//             topping: ["sos-pomidorowy", "ser"],
//             price: [16, 22, 29, 32]
//           }
//         }
//       }
//     ];

//     const store = mockStore({ pizza: { entities: {}, isFetching: false } });

//     return store.dispatch(actions.fetchPizzas()).then(() => {
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });
// });
