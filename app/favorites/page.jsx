"use client";

import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import AddFavorite from "../components/addFavorite";

const Favorites = () => {
  const favoriteMovies = useSelector((store) => store.counter.list);

  return (
    <div>
      {!!favoriteMovies.length && (
        <ul>
          {favoriteMovies.map((movie) => (
            <li key={movie.imdbID}>
              <MovieCard movie={movie} />
              <AddFavorite favorite={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
