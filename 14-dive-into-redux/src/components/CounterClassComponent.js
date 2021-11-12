import classes from "./Counter.module.css";
import { connect } from "react-redux";
import { Component } from "react";
import { counterActions } from "../store/index";

class ClassCounter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {
    this.props.toggleCounter();
  }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter in class component</h1>
        {this.props.show && (
          <div className={classes.value}>{this.props.counter}</div>
        )}
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>
          Toggle Counter
        </button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
    show: state.counter.showCounter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //increment: () => dispatch({ type: "increment" }),
    increment: () => dispatch(counterActions.increment()),
    //decrement: () => dispatch({ type: "decrement" }),
    decrement: () => dispatch(counterActions.decrement()),
    //toggleCounter: () => dispatch({ type: "toggle" }),
    toggleCounter: () => dispatch(counterActions.toggleCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassCounter);
