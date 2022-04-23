import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getFavoriteMovies } from "../app/reducers/MoviesSlice";
import Card from "../components/Card";
import Container from "../components/Container";
import MoviesWrapper from "../components/MoviesWrapper";

const FavouritesPage = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(getFavoriteMovies());
  }, [dispatch]);
  return (
    <Root>
      <Container>
        {favorites.length ? (
          <>
            <Title>Your favorite films</Title>
            <MoviesWrapper>
              {favorites.map((movie) => (
                <Card movie={movie} key={movie.id} />
              ))}
            </MoviesWrapper>
          </>
        ) : (
          <Subtitle>
            You don't have favorites.
            <Link to="/"> Add one! </Link>
          </Subtitle>
        )}
      </Container>
    </Root>
  );
};
const Root = styled.div`
  padding-top: 20px;
`;
const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
`;
const Subtitle = styled.h4`
  font-size: 28px;
  color: #424242;
  a {
    color: #424242;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default FavouritesPage;
