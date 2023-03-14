"use client";
import MovieCard from "./MovieCard";
import { Grid } from "@mui/material";

const movieListStyles = {
  ml: "auto",
  mr: "auto",
  mt: 5,
  maxWidth: 1200,
  mb: 9,
};

const MovieList = ({ movies }) => {
  return (
    <>
      {!!movies.length && (
        <Grid
          container
          spacing={2}
          sx={movieListStyles}
          direction="row"
          justifyContent="space-around"
          alignItems="center">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default MovieList;
