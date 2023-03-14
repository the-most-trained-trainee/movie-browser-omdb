"use client";

import { useSelector, useDispatch } from "react-redux";
import { addMovie, removeMovie } from "../redux/movie/movieSlice";
import { RootState } from "../redux/store";
import React, { useState } from "react";
import Alert from "./Alert";
import { Movie } from "../data-fetching/getMovies";
import { Button } from "@mui/material";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import SendIcon from "@mui/icons-material/Send";

interface Props {
  favorite: Movie;
}

const AddFavorite: React.FC<Props> = ({ favorite }: Props) => {
  const [open, setOpen] = useState(false);
  const movieList = useSelector((state: RootState) => state.movie.list);
  let isFavorite = movieList.includes(favorite);

  const dispatch = useDispatch();

  const favoriteMovieHandler = (movie: Movie) => {
    if (movieList.includes(movie)) {
      dispatch(removeMovie(movie));
    } else {
      dispatch(addMovie(movie));
      setOpen(true);
    }
  };

  const handleClose = (
    event: Event | React.SyntheticEvent<any, Event>,
    reason: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Button
        endIcon={!isFavorite && <SendIcon />}
        variant="contained"
        color={isFavorite ? "error" : "primary"}
        onClick={() => {
          favoriteMovieHandler(favorite);
        }}>
        {isFavorite ? "remove" : "make favorite"}
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        {/* @ts-ignore: Unreachable code error */}
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Added to the Favorites!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddFavorite;
