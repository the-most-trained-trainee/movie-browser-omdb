import getMovies from "../app_files/data-fetching/getMovies";
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
    <>
      <MovieList movies={foundMovies} />
    </>
  );
};

export default Search;
