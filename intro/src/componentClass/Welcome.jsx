import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <>
        <h1>Welcome {this.props.name}</h1>
        <p>Position : {this.props.roll}</p>
      </>
    );
  }
}

export default Welcome;
