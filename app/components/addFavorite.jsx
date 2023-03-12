"use client";

import { useSelector, useDispatch } from "react-redux";
import {
  addMovie,
  removeMovie,
} from "../GlobalRedux/Features/counter/counterSlice";

const AddFavorite = ({ favorite }) => {
  const dispatch = useDispatch();

  const store = useSelector((store) => store);

  const favoriteMovieHandler = (movie) => {
    dispatch(addMovie(movie));
  };

  return (
    <div>
      <button
        onClick={() => {
          favoriteMovieHandler(favorite);
          console.log(store);
        }}>
        add favorit
      </button>
    </div>
  );
};

export default AddFavorite;
