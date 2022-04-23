import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { MoviesSlice } from "./reducers/MoviesSlice";

const rootReducer = combineReducers({
  movies: MoviesSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
