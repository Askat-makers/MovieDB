import { createSlice } from "@reduxjs/toolkit";
import {
  getMovie,
  getMovieRecommendations,
  getMovies,
} from "../actions/MoviesActions";

const initialState = {
  loading: false,
  movies: [],
  totalPages: 0,
  totalMovies: 0,
  movie: null,
  movieRecommendations: [],
  favorites: [],
};

export const MoviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovieToFavorite(state, action) {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      favorites.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      state.favorites = favorites;
    },
    removeMovieFromFavorite(state, action) {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      state.favorites = favorites.filter(
        (movie) => movie.id !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    getFavoriteMovies(state) {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      state.favorites = favorites;
    },
  },
  extraReducers: {
    [getMovies.fulfilled.type]: (state, action) => {
      state.movies = action.payload.results;
      state.totalPages = action.payload.total_pages;
    },
    [getMovie.fulfilled.type]: (state, action) => {
      state.movie = action.payload;
    },
    [getMovieRecommendations.fulfilled.type]: (state, action) => {
      state.movieRecommendations = action.payload;
    },
  },
});

export const {
  addMovieToFavorite,
  getFavoriteMovies,
  removeMovieFromFavorite,
} = MoviesSlice.actions;
