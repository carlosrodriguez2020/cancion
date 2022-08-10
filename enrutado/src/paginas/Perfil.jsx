import React from "react";
import { useParams } from "react-router-dom";

function Perfil() {
  let { userName } = useParams();

  return (
    <div>
      <h3> Perfil del Usuario</h3>
      <p>
        Nombre del ususario <b>{userName}</b>
      </p>
    </div>
  );
}

export default Perfil;
