const getMovies = async (search = 'cat') => {
  const result = await fetch(`http://www.omdbapi.com/?apikey=15904ce&s=${search}`, {
    cache: "no-store",
  });
  const data = await result.json();
  return data.Search;
};

export default getMovies