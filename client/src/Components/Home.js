import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styled from "styled-components";
import logo from "../images/solar_system.svg";
import bgimg from "../images/home_page_img.jpg";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;
  background-image: url(${bgimg});
  background-position: center;
  background-size: cover;
`;

const HomeTitle = styled.h4`
  font-size: 5rem;
  text-align: center;
`;

const HomeSubTitle = styled.h5`
  font-size: 2.5rem;
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <img src={logo} className="App-logo" alt="logo" />
        <HomeTitle>Explore the Solar System</HomeTitle>
        <HomeSubTitle>Take a tour through the galaxy</HomeSubTitle>
        <Link to="/testslideshow">
          <button>Let's Go</button>
        </Link>
      </HomeContainer>
      <Footer />
    </>
  );
};

export default Home;
