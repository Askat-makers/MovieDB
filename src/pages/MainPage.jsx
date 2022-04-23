import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Pagination from "react-responsive-pagination";
import { getMovies } from "../app/actions/MoviesActions";
import Card from "../components/Card";
import Container from "../components/Container";

const MainPage = () => {
  const dispatch = useDispatch();
  const { movies, totalPages } = useSelector((state) => state.movies);
  const [searchParams, setSearchParams] = useSearchParams(
    window.location.search
  );
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || ""
  );
  const [page, setPage] = useState(searchParams.get("page") || 1);

  const liveSearch = (value) => {
    setPage(1);
    setSearchParams({ page: 1, search: value });
    setSearchValue(value);
  };

  const paginate = (page) => {
    setSearchParams({ page, search: searchValue });
    setPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    dispatch(getMovies({ searchValue, page }));
  }, [searchValue, page, dispatch]);

  return (
    <Root>
      <Container>
        <SearchBlock>
          <Input
            type="search"
            placeholder="Live search..."
            onChange={(e) => liveSearch(e.target.value)}
            value={searchValue}
          />
        </SearchBlock>
        <Movies>
          {movies.map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
        </Movies>
        <CustomPagination>
          <Pagination
            current={+page}
            total={totalPages}
            onPageChange={paginate}
            nextLabel={">"}
            previousLabel={"<"}
          />
        </CustomPagination>
      </Container>
    </Root>
  );
};

const Root = styled.div``;
const SearchBlock = styled.div`
  text-align: center;
  padding: 50px;
`;
const Input = styled.input`
  max-width: 560px;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  outline: none;
  font-size: 16px;
`;
const Movies = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
  margin-bottom: 50px;
  @media all and (max-width: 1140px) {
    grid-template-columns: 1fr 1fr;
  }
  @media all and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const CustomPagination = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    li {
      cursor: pointer;
      background-color: #f7f7f7;
      height: 30px;
      margin: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.4s;
      &:hover {
        background-color: #b4b4b4;
      }
      a {
        padding: 5px 10px;
      }
      &.active {
        background-color: #555555;
        color: #fff;
      }
    }
  }
  .sr-only {
    display: none;
  }
`;
export default MainPage;
