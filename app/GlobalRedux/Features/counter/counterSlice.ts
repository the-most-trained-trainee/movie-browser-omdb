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
    addMovie(state, action: PayloadAction<string>) {
      state.list.push(action.payload);
    },
    removeMovie(state, action: PayloadAction<string>) {
      //   state.list = state.list.filter((todo) => todo.id !== action.payload);
      console.log(action.payload);
    },
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;

export default movieSlice.reducer;
