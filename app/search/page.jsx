import getMovies from "../components/getMovies";
import MovieCard from "../components/MovieCard";
import AddFavorite from "../components/addFavorite";

const Search = async ({ searchParams }) => {
  const request = searchParams.query;
  const foundMovies = await getMovies(request);

  return (
    <div>
      {!!foundMovies.length && (
        <ul>
          {foundMovies.map((movie) => (
            <li key={movie.imdbID}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
