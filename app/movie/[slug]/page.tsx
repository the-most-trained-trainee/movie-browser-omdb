import getMovieById from "@/app/app_files/data-fetching/getMovieByID";

const Movie = async ({ params }) => {
  const movieId = params.slug;
  const movie = await getMovieById(movieId);

  return (
    <>
      <h1>{movie.Title}</h1>
      <h2>{movie.Year}</h2>
      <img src={movie.Poster} />
      <p>
        Rating: {movie.imdbRating} ({movie.imdbVotes} votes)
      </p>
      <p>{movie.Plot}</p>
    </>
  );
};

export default Movie;
