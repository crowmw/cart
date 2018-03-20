import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import mockAdapter from "axios-mock-adapter";
import api from "../../utils/api";
import axios from "axios";
import * as actions from "./toppingActions";
import * as types from "../actionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mock = new mockAdapter(api);

mock.onGet("/topping").reply(200, [
  {
    id: "sos-pomidorowy",
    index: 0,
    name: "sos pomidorowy",
    type: "sauce",
    description: "Sos wykonany z pomidorów"
  }
]);

describe("toppingActions", () => {
  describe("fetchTopping", () => {
    afterEach(() => {
      mock.reset();
      mock.restore();
    });

    it("creates FETCH_TOPPING_SUCCESS when fetching pizza has been done", () => {
      const expectedActions = [
        { type: types.FETCH_TOPPING },
        {
          type: types.FETCH_TOPPING_SUCCESS,
          topping: {
            "sos-pomidorowy": {
              id: "sos-pomidorowy",
              index: 0,
              name: "sos pomidorowy",
              type: "sauce",
              description: "Sos wykonany z pomidorów"
            }
          }
        }
      ];

      const store = mockStore({ topping: { entities: {}, isFetching: false } });

      return store.dispatch(actions.fetchTopping()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
