import React, { Component } from "react";

export default class StateRCC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    setInterval(() => {
      this.state.contador += 1;
      this.setState({ contador: this.state.contador + 1 });
    }, 10);
  }
  render() {
    return (
      <div>
        <h2>StateRCC</h2>
        <p>{this.state.contador}</p>
      </div>
    );
  }
}
