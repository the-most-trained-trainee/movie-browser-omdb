"use client";

import { createSlice } from "@reduxjs/toolkit";

type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

type MoviesState = {
  list: Movie[];
};

const initialState: MoviesState = {
  list: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie(state, action) {
      state.list.push(action.payload);
    },
    removeMovie(state, action) {
      state.list = state.list.filter(
        (movie) => movie.imdbID !== action.payload.imdbID
      );
    },
    clearMovies(state, action) {
      state.list = [];
    },
  },
});

export const { addMovie, removeMovie, clearMovies } = movieSlice.actions;

export default movieSlice.reducer;
