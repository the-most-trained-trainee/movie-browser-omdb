const MovieCard = ({ movie }) => {

  return (
    <>
      <img src={movie.Poster}></img>
      <p>{movie.Title} ({movie.Year})</p>
    </>
  )
}

export default MovieCard