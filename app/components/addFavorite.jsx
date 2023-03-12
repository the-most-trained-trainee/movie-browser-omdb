"use client";

import { useSelector, useDispatch } from "react-redux";
import {
  addMovie,
  removeMovie,
} from "../GlobalRedux/Features/counter/movieSlice";
import { Button } from "@mui/material";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import React from "react";
import { ElectricalServicesTwoTone } from "@mui/icons-material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddFavorite = ({ favorite }) => {
  const [open, setOpen] = useState(false);
  const movieList = useSelector((state) => state.movie.list);

  const dispatch = useDispatch();

  const favoriteMovieHandler = (movie) => {
    if (movieList.includes(movie)) {
      dispatch(removeMovie(movie));
    } else {
      dispatch(addMovie(movie));
      setOpen(true);
    }
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
        }}>
        {movieList.includes(favorite) ? "remove favorites" : "make favorite"}
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
