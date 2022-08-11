import React from "react";
import { Link, useParams } from "react-router-dom";

const Cancion = () => {
  let { id } = useParams();
  return (
    <div>
      <p>
        Esto es el id <b>{id}</b>
      </p>
    </div>
  );
};

export default Cancion;
