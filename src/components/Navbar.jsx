import React from "react";
import styled from "styled-components";
import Container from "../components/Container";
import logo from "../assets/icons/navbar_logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Root>
      <Container>
        <Nav>
          <Link to={`/`}>
            <Logo src={logo} />
          </Link>
          <Link to="/favorites">Favorites</Link>
        </Nav>
      </Container>
    </Root>
  );
};

const Root = styled.div`
  background-color: #f7f7f7;
  padding: 20px 0;
  -webkit-box-shadow: 0px 5px 5px -5px rgba(124, 124, 124, 0.6);
  -moz-box-shadow: 0px 5px 5px -5px rgba(124, 124, 124, 0.6);
  box-shadow: 0px 5px 5px -5px rgba(124, 124, 124, 0.6);
  position: sticky;
  top: 0;
  z-index: 1;
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  width: 30px;
`;

export default Navbar;
