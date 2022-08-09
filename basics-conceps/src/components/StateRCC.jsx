import React, { Component } from "react";

export default class StateRCC extends Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
    };
  }
  cuenta = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <h2>StateRCC</h2>
        <button onClick={this.cuenta}>SetInterval</button>
        <p>{this.state.contador}</p>
      </div>
    );
  }
}
