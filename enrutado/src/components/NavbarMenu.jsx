import React from "react";
import { Link } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <section>
      <nav>
        <Link to="/" className="App-link">
          {" "}
          Home{" "}
        </Link>
        <Link to="/acerca" className="App-link">
          {" "}
          Acerca{" "}
        </Link>
        <Link to="/productos" className="App-link">
          {" "}
          Productos{" "}
        </Link>
        <Link to="/error" className="App-link">
          {" "}
          Error{" "}
        </Link>

        <Link to="/perfil/carlosRodriguez" className="App-link">
          {" "}
          CR{" "}
        </Link>
        <Link to="/perfil/diveria" className="App-link">
          {" "}
          DV{" "}
        </Link>
      </nav>
    </section>
  );
};

export default NavbarMenu;
