import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import WebAssetIcon from "@material-ui/icons/WebAsset";
export const Buscador = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <form className={classes.root} autoComplete="on">
        <IconButton color="primary" type="reset">
          <HomeIcon />
        </IconButton>
        <TextField
          id="artist"
          name="Artist"
          label="Artista"
          variant="outlined"
          size="small"
          required
        />
        <TextField
          id="song"
          name="Cancion"
          label="Cancion"
          variant="outlined"
          size="small"
          required
        />
        <IconButton color="primary" type="submit">
          <WebAssetIcon />
        </IconButton>
      </form>
    </div>
  );
};
export default Buscador;
