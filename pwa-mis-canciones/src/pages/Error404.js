import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import { FormatAlignCenter } from "@material-ui/icons";
export const Error404 = () => {
  let url = useLocation();
  return (
    <div>
      <section>
        <Alert
          severity="warning"
          style={{ maxWidth: 752, margin: "2rem auto 0" }}
        >
          <AlertTitle>
            <p>
              Recurso{" "}
              <b>
                <i>{url.pathname}</i>
              </b>{" "}
              no encontrado
            </p>
          </AlertTitle>
          This is a warning alert — <strong>check it out!</strong>
        </Alert>
      </section>
      <div style={{ margin: "1rem auto", textAlign: "center" }}>
        <IconButton color="primary">
          <Link to="/">
            <HomeIcon />
          </Link>
        </IconButton>
      </div>
    </div>
  );
};
export default Error404;
