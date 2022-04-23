import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
  return <Root>{children}</Root>;
};
const Root = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

export default Container;
