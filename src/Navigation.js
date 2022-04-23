import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import FavouritesPage from "./pages/FavouritesPage";
import MainPage from "./pages/MainPage";
import MoviePage from "./pages/MoviePage";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/favorites" element={<FavouritesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
