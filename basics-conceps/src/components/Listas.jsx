import React, { Component } from "react";
import data from "./data.json";
import "../App.css";
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
        <h2>Listas y Keys</h2>
        <h3>Estaciones</h3>
        {this.state.season.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
        <ul>
          {data.frameworks.map((element) => (
            <li key={element.id} className="App-link">
              <a href={element.web} target="_blank">
                <h3>{element.name}</h3>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
