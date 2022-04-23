import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API, KEY } from "../../helpers/const";

export const getMovies = createAsyncThunk("movies/getMovies", async (param) => {
  try {
    if (param.searchValue) {
      const { data } = await axios(
        `${API}/search/movie?api_key=${KEY}&language=en-US&page=${param.page}&query=${param.searchValue}`
      );
      return data;
    }
    const { data } = await axios(
      `${API}/movie/popular?api_key=${KEY}&language=en-US&page=${param.page}&query=${param.searchValue}`
    );
    return data;
  } catch (e) {
    console.log(e);
  }
});

export const getMovie = createAsyncThunk("movies/getMovie", async (id) => {
  try {
    const { data } = await axios(`${API}/movie/${id}?api_key=${KEY}`);
    return data;
  } catch (e) {
    console.log(e);
  }
});

export const getMovieRecommendations = createAsyncThunk(
  "movies/getMovieRecommendations",
  async (id) => {
    try {
      const { data } = await axios(
        `${API}/movie/${id}/recommendations?api_key=${KEY}`
      );
      return data.results;
    } catch (e) {
      console.log(e);
    }
  }
);
