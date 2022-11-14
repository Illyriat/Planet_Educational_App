import React from "react";
import NavBar from "./Navbar";
import styled from "styled-components";

const MainBanner = styled.div`
  background-color: red;
  color: white;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <MainBanner>
      <h1>BBC</h1>
      <NavBar />
    </MainBanner>
  );
};

export default Header;
