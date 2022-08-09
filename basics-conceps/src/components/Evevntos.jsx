import React, { Component } from "react";

export default class Evevntos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuenta: 0,
    };
    // this.sumar = this.sumar.bind(this);
    // this.restar = this.restar.bind(this);
  }
  sumar = () => {
    this.setState({
      cuenta: this.state.cuenta + 1,
    });
  };
  restar = () => {
    this.setState({
      cuenta: this.state.cuenta - 1,
    });
  };
  render() {
    return (
      <div>
        <h2>Eventos</h2>
        <h3>{this.state.cuenta}</h3>
        <button onClick={this.sumar}>+</button>
        <button onClick={this.restar}>-</button>
      </div>
    );
  }
}
