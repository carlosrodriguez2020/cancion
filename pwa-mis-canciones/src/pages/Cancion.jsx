import React from "react";
import { Link, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    margin: "center",
  },
  lyrics: {
    whiteSpace: "pre-wrap !important",
  },
  title: {
    marginBotton: "cover",
    height: "50vh",
  },
  goHome: {
    justifyContent: "center",
  },
}));

const Cancion = (mySongs) => {
  const classes = useStyles();
  let { id } = useParams(),
    song = mySongs(id);

  return (
    <Card className="classes.root">
      <CardActions className={classes.goHome}>
        <Button size="large" color="primary" component={Link} to="/">
          <HomeIcon />
          Home
        </Button>
      </CardActions>
      <CardMedia
        className={classes.media}
        image={song.avatar}
        title={song.artist}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="h2"
          className={classes.title}
        >
          {song.artist} -{song.song}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.lyrics}
        >
          {song.lyrics}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cancion;
