import React, { Component } from "react";

function Login() {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}
function LogOut() {
  return (
    <div>
      <h1>LogOut</h1>
    </div>
  );
}

export default class RenderizadoCondicional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: true,
    };
  }
  render() {
    return (
      <div>
        <h2>RenderizadoCondicional</h2>
        {this.state.session ? <Login /> : <LogOut />}
      </div>
    );
  }
}
