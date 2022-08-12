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

const Buscador2 = ({ serch, setSerch, setError, getData }) => {
  const { artist, song } = serch;

  const handleReset = () => {
    setSerch({
      artis: "",
      song: "",
      req: false,
    });
    setError(false);
  };

  const setBusquedaA = (serch) => {
    console.log(serch.target.value);
    setSerch({
      song,
      artist: serch.target.value,
      req: false,
    });
  };
  const setBusquedaS = (serch) => {
    setSerch({
      artist,
      song: serch.target.value,
      req: false,
    });
  };

  const classes = useStyles();
  return (
    <div>
      <form className={classes.root} autoComplete="on" onReset={handleReset}>
        <IconButton color="primary" type="reset">
          <HomeIcon />
        </IconButton>
        <TextField
          id="artist"
          name="artist"
          label="Artista"
          variant="outlined"
          size="small"
          onChange={setBusquedaA}
          // value={serch.artis}
          // {...register("artist")}
          required
        />

        <TextField
          id="song"
          name="song"
          label="Cancion"
          variant="outlined"
          size="small"
          onChange={setBusquedaS}
          // value={serch.song}
          // {...register("song")}
          required
        />
        <IconButton color="primary" onClick={getData}>
          <WebAssetIcon />
        </IconButton>
      </form>
    </div>
  );
};

export default Buscador2;
