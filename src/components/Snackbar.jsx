import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const SnackbarComponent = (isOpenSnackbar, hideSnackbar, message) => {
  console.log(isOpenSnackbar, hideSnackbar, message);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    hideSnackbar();
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar
      open={isOpenSnackbar}
      autoHideDuration={6000}
      onClose={handleClose}
      message={message}
      action={action}
    />
  );
};
