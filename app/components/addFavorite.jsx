"use client";

import { useSelector, useDispatch } from "react-redux";
import {
  addMovie,
  removeMovie,
} from "../GlobalRedux/Features/counter/counterSlice";
import { Button } from "@mui/material";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import React from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddFavorite = ({ favorite }) => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const store = useSelector((store) => store);

  const favoriteMovieHandler = (movie) => {
    dispatch(addMovie(movie));
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          favoriteMovieHandler(favorite);
          console.log(store);
        }}>
        make favorite
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Added to the Favorites!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddFavorite;
