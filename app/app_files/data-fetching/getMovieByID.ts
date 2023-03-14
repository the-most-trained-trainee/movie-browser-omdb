const getMovieById = async (id: string) => {
  const result = await fetch(`http://www.omdbapi.com/?apikey=15904ce&i=${id}`, {
    cache: "no-store",
  });
  const data = await result.json();
  const fullMovieInfo = {
    Title: data.Title,
    Year: data.Year,
    Poster: data.Poster,
    imdbRating: data.imdbRating,
    imdbVotes: data.imdbVotes,
    Plot: data.Plot,
  };

  return fullMovieInfo;
};

export default getMovieById;
