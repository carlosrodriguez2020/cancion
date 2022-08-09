import React, { Component } from "react";

export default class Reloj extends Component {
  constructor(props) {
    super(props);
    // console.log(0, "aun No esta en el Dom");
    this.state = {
      date: new Date().toLocaleTimeString(),
    };
  }
  componentDidMount() {
    // console.log(
    //   "El componente se encuentra en el DOM se puede suscribir alguna base de dato"
    // );
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(
    //   "Se encuentra el metodo render nuevamente, recibe las propiedades previas y el estado previo a la actualizacion"
    // );
  }
  componentDidMount() {
    console
      .log
      // "se elimino el componente del Dom, tambien se utiliza para limpieza"
      ();
  }
  render() {
    // console.log("render() redibuja el Dom por cualquier circunstancia");
    return (
      <div>
        <h2>Ciclo de vida de un Componente</h2>
        <h3>{this.state.date}</h3>
      </div>
    );
  }
}
