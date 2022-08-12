import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";
// import PanToolAltIcon from "@mui/icons-material/PanToolAlt";

const AlertDialog = (id, deleteSong) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton edge="end" onClick={handleClickOpen}>
        <h5>Delete</h5>
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-description"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Alerta de eliminacion</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Estas por borrar esta conscion<b>{id}</b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              deleteSong(id);
              handleClose();
            }}
            color="primary"
          >
            {/* <DeleteIcon />  */}
            Si, eliminar
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            NO, detente
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
