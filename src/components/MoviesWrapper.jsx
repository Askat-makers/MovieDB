import React from "react";
import styled from "styled-components";

const MoviesWrapper = ({ children }) => {
  return <Root>{children}</Root>;
};
const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
  @media all and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export default MoviesWrapper;
