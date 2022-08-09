import React, { Component } from "react";

class RCComponent extends Component {
  constructor(props) {
    // console.log(">>>>>", props);
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Hi {this.props.mensj}</h2>
      </div>
    );
  }
}

export default RCComponent;
