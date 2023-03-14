"use client";
import MovieCard from "./MovieCard";
import { Grid } from "@mui/material";
import { Movie } from "../data-fetching/getMovies";

interface Props {
  movies: Movie[];
}

const movieListStyles = {
  ml: "auto",
  mr: "auto",
  mt: 5,
  maxWidth: 1200,
  mb: 9,
};

const MovieList: React.FC<Props> = ({ movies }: Props) => {
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
