"use client";
import { Card, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import AddFavorite from "./AddFavorite";
import { Movie } from "../data-fetching/getMovies";
import { Roboto } from "next/font/google";

const font = Roboto({ weight: "400", subsets: ["latin"] });

const cardStyles = {
  maxWidth: 260,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: 1,
  gap: 1.5,
  position: "relative",
  backgroundColor: "#eef1f4",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
};

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }: Props) => {
  return (
    <Grid item>
      <Card sx={cardStyles}>
        <Typography paragraph>
          {movie.Title} ({movie.Year})
        </Typography>
        <Image src={movie.Poster} width={250} height={350} alt="Movie Poster" />
        <Link href={`/movie/${movie.imdbID}`} className={font.className}>
          Read more...
        </Link>
        <AddFavorite favorite={movie} />
      </Card>
    </Grid>
  );
};

export default MovieCard;
