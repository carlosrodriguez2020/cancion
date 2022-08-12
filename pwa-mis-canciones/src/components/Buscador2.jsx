import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import { useForm } from "react-hook-form";

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

const Buscador2 = ({ serch, setSerch, setError }) => {
  const { artist, song } = serch;
  const { register, handleSubmit } = useForm();

  const handleReset = () => {
    setSerch({
      artis: "",
      song: "",
      req: false,
    });
    setError(false);
  };

  const setBusquedaA = (serch) => {
    console.log(serch);
    setSerch({
      ...serch,
      artist: artist,
      req: false,
    });

    console.log(">>>", artist);
  };
  const setBusquedaS = (serch) => {
    console.log(serch);
    setSerch({
      ...serch,
      artist: serch.song,
      req: false,
    });
    console.log(">>>", song);
  };
  const onSubmit = ({ artist, song }) => {
    // e.preventDefault();
    setSerch({
      artist: artist,
      song: song,
      req: true,
    });
    // console.log({ serch });
    setBusquedaA();
    setBusquedaS();
  };

  const classes = useStyles();
  return (
    <div>
      <form
        className={classes.root}
        autoComplete="on"
        onSubmit={handleSubmit(onSubmit)}
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
          onChange={setBusquedaA}
          // value={serch.artis}
          {...register("artist")}
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
          {...register("song")}
          required
        />
        <IconButton color="primary" type="submit">
          <WebAssetIcon />
        </IconButton>
      </form>
    </div>
  );
};

export default Buscador2;
