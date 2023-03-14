import getMovieById from "@/app/app_files/data-fetching/getMovieByID";
import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}

const Movie = async ({ params }: Props): Promise<JSX.Element> => {
  const movieId = params.slug;
  const movie = await getMovieById(movieId);

  return (
    <>
      <h1>{movie.Title}</h1>
      <h2>{movie.Year}</h2>
      <Image src={movie.Poster} alt="Movie Poster" />
      <p>
        Rating: {movie.imdbRating} ({movie.imdbVotes} votes)
      </p>
      <p>{movie.Plot}</p>
    </>
  );
};

export default Movie;
