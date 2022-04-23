import React, { useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getMovie,
  getMovieRecommendations,
} from "../app/actions/MoviesActions";
import { IMAGE_API } from "../helpers/const";
import { isFavorite } from "../helpers/functions";
import Container from "../components/Container";
import Recommendations from "../components/Recommendations";
import {
  addMovieToFavorite,
  removeMovieFromFavorite,
} from "../app/reducers/MoviesSlice";

const MoviePage = () => {
  const dispatch = useDispatch();
  const { movie, movieRecommendations } = useSelector((state) => state.movies);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovie(id));
    dispatch(getMovieRecommendations(id));
  }, [dispatch, id]);

  return (
    <Root>
      <Container>
        <Wrapper>
          <Image src={`${IMAGE_API}${movie?.poster_path}`} />
          <Right>
            <Title margin="0">{movie?.title}</Title>
            <List>
              <Item>
                <Key>Genres: </Key>
                <Value>{movie?.genres.map((genre) => genre.name + " ")}</Value>
              </Item>
              <Item>
                <Key>Release date: </Key>
                <Value>{movie?.release_date}</Value>
              </Item>
              <Item>
                <Key>Country: </Key>
                <Value>{movie?.production_countries[0].name}</Value>
              </Item>
              <Item>
                <Key>Tagline: </Key>
                <Value>{movie?.tagline}</Value>
              </Item>
              <Item>
                <Key>Budget: </Key>
                <Value>
                  <CurrencyFormat
                    value={movie?.budget}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </Value>
              </Item>
              <Item>
                <Key>Revenue: </Key>
                <Value>
                  <CurrencyFormat
                    value={movie?.revenue}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </Value>
              </Item>
              <Item>
                <Key>Description: </Key>
                <Value>{movie?.overview}</Value>
              </Item>
            </List>
            {isFavorite(movie?.id) ? (
              <Button
                bgColor="#FFC107"
                onClick={() => dispatch(removeMovieFromFavorite(movie?.id))}
              >
                В избранном
              </Button>
            ) : (
              <Button
                bgColor="#f7f7f7"
                onClick={() => dispatch(addMovieToFavorite(movie))}
              >
                В избранное
              </Button>
            )}
          </Right>
        </Wrapper>
        <Title margin="50px 0 15px">Recommended for viewing</Title>
        <Recommendations movieRecommendations={movieRecommendations} />
      </Container>
    </Root>
  );
};

const Root = styled.div`
  margin-top: 30px;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 20px;
`;
const Image = styled.img`
  width: 100%;
`;
const Right = styled.div``;
const Title = styled.h2`
  margin: ${(props) => props.margin};
`;
const List = styled.ul``;
const Item = styled.li`
  margin: 10px 0;
  list-style-type: none;
`;
const Key = styled.strong``;
const Value = styled.span``;
const Button = styled.button`
  border: none;
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
`;

export default MoviePage;
