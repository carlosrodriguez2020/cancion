import React, { Component } from "react";

export default class Listas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      season: ["Primavera", "Otoño", "Verano", "invierno"],
    };
  }
  render() {
    return (
      <div>
        <h2>listas y keys</h2>
        <h3>Estaciones</h3>
        {this.state.season.map((el) => (
          <li>{el}</li>
        ))}
      </div>
    );
  }
}
