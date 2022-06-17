import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.props.increase}>+</button>
        {this.props.count}
        <button onClick={this.props.decrease}>-</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increase: () => {
      dispatch({ type: "INCREASE" });
    },
    decrease: () => {
      dispatch({ type: "DECREASE" });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
