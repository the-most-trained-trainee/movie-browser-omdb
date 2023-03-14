"use client";
import { useSelector, useDispatch } from "react-redux";
import { clearMovies } from "../app_files/redux/movie/movieSlice";
import { RootState } from "../app_files/redux/store";
import Button from "@mui/material/Button";
import MovieList from "../app_files/components/MovieList";

const Favorites: React.FC = () => {
  const favoriteMovies = useSelector((store: RootState) => store.movie.list);
  const dispatch = useDispatch();

  const buttonStyles = {
    display: "block",
    ml: "auto",
    mr: "auto",
    padding: 2,
  };

  return (
    <>
      <MovieList movies={favoriteMovies} />
      {!!favoriteMovies.length && (
        <Button
          onClick={() => dispatch(clearMovies())}
          variant="contained"
          sx={buttonStyles}
          color="error">
          remove all favorites
        </Button>
      )}
    </>
  );
};

export default Favorites;
