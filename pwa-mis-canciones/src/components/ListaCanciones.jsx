import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import LaunchIcon from "@material-ui/icons/Launch";
import { Alert } from "@mui/material";
import AlertDialog from "./AlertDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
    margin: "auto",
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  alert: {
    iconSize: "1.5rem",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const ListaCanciones = ({ mySongs, setMySongs }) => {
  const classes = useStyles();

  const deleteSong = (id) => {
    let songs = mySongs.filter((el, index) => index !== id);
    setMySongs(songs);
    localStorage.setItem("mySongs", JSON.stringify(songs));
  };

  console.log(mySongs);
  return (
    <div className={classes.root}>
      <div className={classes.demo}>
        {mySongs.length === 0 ? (
          <Alert severity="error" className={classes.Alert}>
            No tiene canciones
          </Alert>
        ) : (
          <List>
            {mySongs.map((el, index) => {
              return (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar alt={el.artist} src={el.avatar} />
                  </ListItemAvatar>
                  <ListItemText primary={el.song} secondary={el.artist} />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      component={Link}
                      to={`cancion/${index}`}
                    >
                      <LaunchIcon />
                    </IconButton>
                    <AlertDialog id={index} deleteSong={deleteSong} />
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        )}
      </div>
    </div>
  );
};
export default ListaCanciones;
