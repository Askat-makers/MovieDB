import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { genres, IMAGE_API } from "../helpers/const";
import {
  addMovieToFavorite,
  removeMovieFromFavorite,
} from "../app/reducers/MoviesSlice";
import { isFavorite } from "../helpers/functions";
import whiteStar from "../assets/icons/white_star.png";
import goldStar from "../assets/icons/gold_star.png";

const Card = ({ movie }) => {
  const dispatch = useDispatch();
  const getGenreName = (id) => {
    return genres.find((genre) => genre.id === id).name;
  };
  return (
    <Root>
      <Link to={`/movie/${movie.id}`}>
        <CardImage src={`${IMAGE_API}${movie.poster_path}`} />
        <CardTitle>{movie.original_title}</CardTitle>
        <Genres>
          {movie.genres
            ? movie.genres.map((genre) => (
                <Genre key={genre.id}>{genre.name}</Genre>
              ))
            : movie.genre_ids.map((id) => (
                <Genre key={id}>{getGenreName(id)}</Genre>
              ))}
        </Genres>
      </Link>
      {isFavorite(movie.id) ? (
        <ToFavorite
          src={goldStar}
          onClick={() => dispatch(removeMovieFromFavorite(movie.id))}
        />
      ) : (
        <ToFavorite
          src={whiteStar}
          onClick={() => dispatch(addMovieToFavorite(movie))}
        />
      )}
    </Root>
  );
};
const Root = styled.div`
  width: 300px;
  height: 500px;
  border-radius: 15px;
  background-color: #f7f7f7;
  padding: 10px;
  position: relative;
  justify-self: center;
`;
const CardTitle = styled.h4`
  font-size: 20px;
`;
const CardImage = styled.img`
  width: 280px;
  height: 380px;
  object-fit: contain;
`;
const Genres = styled.div``;
const Genre = styled.span`
  display: inline-block;
  margin-right: 10px;
  font-size: 12px;
  color: #636363;
`;
const ToFavorite = styled.img`
  width: 25px;
  position: absolute;
  bottom: 15px;
  right: 15px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    width: 30px;
  }
`;

export default Card;
