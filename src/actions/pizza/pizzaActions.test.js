import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import mockAdapter from "axios-mock-adapter";
import api from "../../utils/api";
import axios from "axios";
import * as actions from "./pizzaActions";
import * as types from "../actionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mock = new mockAdapter(api);

mock.onGet("/pizza").reply(200, [
  {
    id: "margherita",
    index: 0,
    name: "Margherita",
    description: "Pizza sos ser",
    topping: ["sos-pomidorowy", "ser"],
    price: [16, 22, 29, 32]
  }
]);

describe("pizzaActions", () => {
  // afterEach(() => {
  //   mock.reset();
  //   mock.restore();
  // });
  describe("fetchPizza", () => {
    it("creates FETCH_PIZZA_SUCCESS when fetching pizza has been done", () => {
      const expectedActions = [
        { type: types.FETCH_PIZZA },
        {
          type: types.FETCH_PIZZA_SUCCESS,
          pizza: {
            margherita: {
              id: "margherita",
              index: 0,
              name: "Margherita",
              description: "Pizza sos ser",
              topping: ["sos-pomidorowy", "ser"],
              price: [16, 22, 29, 32]
            }
          }
        }
      ];

      const store = mockStore({ pizza: { entities: {}, isFetching: false } });

      return store.dispatch(actions.fetchPizzas()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
