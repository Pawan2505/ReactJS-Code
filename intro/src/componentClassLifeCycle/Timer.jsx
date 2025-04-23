import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isRunning: false,
    };
  }

  // Start counter after component mounts
  componentDidMount() {
    console.log("Component mounted...");
  }

  // Called after any update (state/props)
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Count updated to:", this.state.count);
    }

    if (prevState.isRunning && !this.state.isRunning) {
      console.log("Counter stopped...");
    }
  }

  // 🔹 Clean up before component is removed
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component unmounted...");
  }

  // Start the counter
  startCounter = () => {
    if (!this.state.isRunning) {
      this.timer = setInterval(() => {
        this.setState((prevState) => ({
          count: prevState.count + 1,
        }));
      }, 1000);
      this.setState({ isRunning: true });
    }
  };

  // Stop the counter
  stopCounter = () => {
    clearInterval(this.timer);
    this.setState({ isRunning: false });
  };

  render() {
    return (
      <div className="text-center mt-5">
        <h2>Count: {this.state.count}</h2>
        <button className="btn btn-success m-2" onClick={this.startCounter}>
          Start
        </button>
        <button className="btn btn-danger m-2" onClick={this.stopCounter}>
          Stop
        </button>
      </div>
    );
  }
}

export default Counter;
