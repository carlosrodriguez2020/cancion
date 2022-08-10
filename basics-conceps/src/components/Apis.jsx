import React, { Component } from "react";
import Pokemon from "./Pokemon";

export default class Apis extends Component {
  state = {
    pokemones: [],
  };
  async componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    const req = await fetch(url);
    const resp = await req.json();
    // console.log(resp);
    resp.results.forEach((element) => {
      fetch(element.url)
        .then((res) => res.json())
        .then((json) => {
          // console.log(">>>>>", json);
          let pokemon = {
            id: json.id,
            name: json.name,
            avatar: json.sprites.front_default,
          };
          let pokemones = [...this.state.pokemones, pokemon];
          this.setState({ pokemones });
        });
    });
  }
  render() {
    return (
      <div>
        {this.state.pokemones.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          this.state.pokemones.map((el) => (
            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
          ))
        )}
      </div>
    );
  }
}
