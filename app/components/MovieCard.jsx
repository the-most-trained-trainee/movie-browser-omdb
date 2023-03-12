"use client";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddFavorite from "./addFavorite";

const cardStyles = {
  maxWidth: 260,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  gap: 0,
  position: "relative",
  backgroundColor: "#d5cdcd",
};

const iconButtonStyles = {
  color: "red",
  position: "absolute",
  opacity: 0.6,
};

const MovieCard = ({ movie }) => {
  return (
    <Card sx={cardStyles}>
      <Typography paragraph>
        {movie.Title} ({movie.Year})
      </Typography>
      <Image src={movie.Poster} width={250} height={350} alt="Movie Poster" />
      <IconButton aria-label="add to favorites" sx={iconButtonStyles}>
        <FavoriteIcon />
      </IconButton>
      <AddFavorite favorite={movie} />
    </Card>
  );
};

export default MovieCard;
