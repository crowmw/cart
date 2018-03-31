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
    it('should create CURRENT_PIZZA_CHANGE action', () => {
      const id = 'margherita'
      const expectedAction = { type: types.CURRENT_PIZZA_CHANGE, id }

      expect(actions.currentPizzaChange(id)).toEqual(expectedAction)
    })
  })

  describe('currentSizeChange', () => {
    it('should create CURRENT_SIZE_CHANGE action', () => {
      const size = 30
      const expectedAction = { type: types.CURRENT_SIZE_CHANGE, size }

      expect(actions.currentSizeChange(size)).toEqual(expectedAction)
    })
  })

  describe('currentToppingsChange', () => {
    it('should create CURRENT_TOPPINGS_CHANGE', () => {
      const id = 1
      const quantity = 1
      const expectedAction = {
        type: types.CURRENT_TOPPINGS_CHANGE,
        id,
        quantity
      }

      expect(actions.currentToppingsChange(id)).toEqual(expectedAction)
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
