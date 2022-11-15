import React from "react";
import NavBar from "./Navbar";
import styled from "styled-components";
import BBCLogo from "../images/bbc_logo.svg";

const Logo = styled.img`
  color: white;
  height: 2.5rem;
`;

const MainBanner = styled.div`
  background-color: #b90005;
  color: white;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <MainBanner>
      <Logo src={BBCLogo} alt=""></Logo>
      <NavBar />
    </MainBanner>
  );
};

export default Header;
