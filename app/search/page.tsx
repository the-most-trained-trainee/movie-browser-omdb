import getMovies from "../app_files/data-fetching/getMovies";
import MovieCard from "../app_files/components/MovieCard";
import MovieList from "../app_files/components/MovieList";

interface Props {
  searchParams?: {
    query: string;
  };
}

const Search = async ({ searchParams }: Props): Promise<JSX.Element> => {
  const request = searchParams?.query || "";

  const foundMovies = await getMovies(request);

  return (
    <div>
      {!!foundMovies.length && (
        <ul>
          {foundMovies.map((movie) => (
            <li key={movie.imdbID}>
              <p>{movie.Title}</p>
            </li>
          ))}
        </ul>
      )}
      {/* {!!foundMovies.length && (
        <ul>
          {foundMovies.map((movie) => (
            <li key={movie.imdbID}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      )} */}
      {/* <MovieList movies={foundMovies} /> */}
    </div>
  );
};

export default Search;
