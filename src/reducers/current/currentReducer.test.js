import currentReducer, * as reducer from "./currentReducer";
import * as types from "../../actions/actionTypes";

describe("currentReducer", () => {
  describe("pizza", () => {
    it("should return initial state", () => {
      expect(currentReducer(undefined, {})).toEqual(reducer.initialState);
    });

    it("should set current pizza id on CURRENT_PIZZA_CHANGE", () => {
      const expected = "margherita";

      const action = {
        type: types.CURRENT_PIZZA_CHANGE,
        id: expected
      };

      expect(reducer.pizza(reducer.initialState.pizza, action)).toEqual(
        expected
      );
    });
  });
});
