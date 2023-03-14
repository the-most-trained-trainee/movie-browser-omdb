export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const getMovies = async (search: string): Promise<Movie[]> => {
  const result = await fetch(
    `http://www.omdbapi.com/?apikey=15904ce&s=${search}`,
    {
      cache: "no-store",
    }
  );
  const data = await result.json();
  return data.Search;
};

export default getMovies;
