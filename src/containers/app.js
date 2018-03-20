import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchPizzas } from "../actions/pizza/pizzaActions";
import { fetchTopping } from "../actions/topping/toppingActions";
import { currentPizzaChange } from "../actions/current/currentActions";

import { getPizzaEntitiesArray } from "../selectors/pizzaSelector";

class App extends Component {
  componentWillMount() {
    this.props.fetchPizzas();
    this.props.fetchTopping();
  }

  handlePizzaClick = pizza => {
    this.props.currentPizzaChange(pizza.id);
  };

  render() {
    const { pizzas } = this.props;

    if (pizzas.length > 0) {
      return (
        <div className="App">
          <ul>
            {pizzas.map((pizza, index) => {
              return (
                <li
                  key={index}
                  style={{ marginBottom: "1em", cursor: "pointer" }}
                  onClick={() => this.handlePizzaClick(pizza)}
                >
                  <div>
                    {`${pizza.name} - ${pizza.description} - (${
                      pizza.price[0]
                    } - ${pizza.price[pizza.price.length - 1]} zł)`}
                  </div>
                  <div>{pizza.topping.map(topping => `${topping.name}, `)}</div>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapState = state => {
  return { pizzas: getPizzaEntitiesArray(state) };
};

const mapDispatch = dispatch => {
  return bindActionCreators(
    {
      fetchPizzas,
      fetchTopping,
      currentPizzaChange
    },
    dispatch
  );
};

export default connect(mapState, mapDispatch)(App);
