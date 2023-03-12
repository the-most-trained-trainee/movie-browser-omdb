"use client";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddFavorite from "./addFavorite";
import { Grid } from "@mui/material";
import ReadMore from "./readMore";

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

const MovieCard = ({ movie }) => {
  return (
    <Grid item xs="12" md="4">
      <Card sx={cardStyles}>
        <Typography paragraph>
          {movie.Title} ({movie.Year})
        </Typography>
        <Image src={movie.Poster} width={250} height={350} alt="Movie Poster" />
        <AddFavorite favorite={movie} /> <ReadMore />
      </Card>
    </Grid>
  );
};

export default MovieCard;
