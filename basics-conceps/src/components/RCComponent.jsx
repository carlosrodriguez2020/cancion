import React, { Component } from "react";

class RCComponent extends Component {
  render() {
    return (
      <div>
        <h2>Hi {this.props.msj}</h2>
      </div>
    );
  }
}

export default RCComponent;
