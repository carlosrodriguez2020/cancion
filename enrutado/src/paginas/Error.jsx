import React from "react";
import { useLocation, Link } from "react-router-dom";
const Error = () => {
  let url = useLocation();
  return (
    <div>
      <h3>Error404</h3>
      <p>
        URL:<b>{url.pathname}</b> no encontrado
      </p>
      <p>
        volver{" "}
        <Link to="/" className="App-link">
          Home
        </Link>
      </p>
    </div>
  );
};

export default Error;
