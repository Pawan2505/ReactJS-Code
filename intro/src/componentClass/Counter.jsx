import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "Pawan",
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <>
        <h1>Name : {this.state.name}</h1>
        <h1>Count {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </>
    );
  }
}

export default Counter;
