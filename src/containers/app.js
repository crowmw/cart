import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPizzas } from "../actions/pizza/pizzaActions";

class App extends Component {
  componentWillMount() {
    this.props.fetchPizzas();
  }
  render() {
    return <div className="App">Hello World</div>;
  }
}

const mapDispatch = dispatch => {
  return bindActionCreators(
    {
      fetchPizzas
    },
    dispatch
  );
};

export default connect(null, mapDispatch)(App);
