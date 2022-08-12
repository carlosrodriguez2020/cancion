import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import WebAssetIcon from "@material-ui/icons/WebAsset";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& > *": {
      margin: theme.spacing(1),
      width: "auto",
    },
  },
}));

export const Buscador = ({ serch, setSerch, setError }) => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSerch({
      artis: e.target.artist.value,
      song: e.target.song.value,
      req: true,
    });
  };
  const handleReset = () => {
    setSerch({
      artis: "",
      song: "",
      req: false,
    });
    setError(false);
  };

  return (
    <div>
      <form
        className={classes.root}
        autoComplete="on"
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <IconButton color="primary" type="reset">
          <HomeIcon />
        </IconButton>
        <TextField
          id="artist"
          name="artist"
          label="Artista"
          variant="outlined"
          size="small"
          value={serch.artist}
          onChange={(e) => {
            setSerch({
              ...serch,
              artist: e.target.value,
              req: false,
            });
          }}
          required
        />
        <TextField
          id="song"
          name="song"
          label="Cancion"
          variant="outlined"
          size="small"
          value={serch.song}
          onChange={(e) => {
            setSerch({
              ...serch,
              song: e.target.value,
              req: false,
            });
          }}
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
