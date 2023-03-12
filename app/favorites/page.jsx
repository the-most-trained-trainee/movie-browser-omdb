"use client";

import { useSelector, useDispatch } from "react-redux";
import MovieCard from "../components/MovieCard";
import AddFavorite from "../components/addFavorite";
import { Grid } from "@mui/material";
import { clearMovies } from "../GlobalRedux/Features/counter/movieSlice";

const Favorites = () => {
  const favoriteMovies = useSelector((store) => store.movie.list);
  const dispatch = useDispatch();

  const movieListStyles = {
    ml: "auto",
    mr: "auto",
    mt: 5,
    maxWidth: 1200,
  };

  return (
    <>
      <button onClick={() => dispatch(clearMovies())}>clear favorites</button>
      {!!favoriteMovies.length && (
        <Grid
          container
          spacing={2}
          sx={movieListStyles}
          direction="row"
          justifyContent="space-around"
          alignItems="center">
          {favoriteMovies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default Favorites;
