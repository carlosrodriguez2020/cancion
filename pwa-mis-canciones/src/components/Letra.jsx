import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    margin: "2rem auto",
  },
  lyrics: {
    whiteSpace: "pre-wrap !important",
  },
  title: {
    marginBottom: "3rem !important",
  },
  media: {
    backgroundSize: "COVER",
    height: "50vh",
  },
  addBtn: {
    justifyContent: "flex-end",
  },
}));

const Letra = ({
  currentSong,
  setCurrentSong,
  mySongs,
  setMySongs,
  setSerch,
}) => {
  console.log(mySongs);
  const classes = useStyles();

  const handleClick = (e) => {
    setMySongs((mySongs) => [...mySongs, setCurrentSong]);
    setSerch({
      artist: <h1>artist</h1>,
      song: <h1>song</h1>,
      req: false,
    });
    setCurrentSong({});
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={currentSong?.avatar}
        title={currentSong?.artist}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="h2"
          className={classes.title}
        >
          {currentSong?.artist}-{currentSong?.song}
        </Typography>
        <Typography>{currentSong?.lyrics}</Typography>
      </CardContent>

      <CardActions className={classes.addBtn}>
        <Button size="large" color="primary" onClick={handleClick}>
          <AddCircleIcon />
          AGREGAR
        </Button>
      </CardActions>
    </Card>
  );
};

export default Letra;
