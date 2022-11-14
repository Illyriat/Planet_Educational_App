import React from "react";
import "./Home.css";
import Header from "../Components/Header";
import styled from "styled-components";
import logo from "../images/solar_system.svg";

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
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
        {/* <div>
          <iframe
            title="xtxt"
            src="https://solarsystem.nasa.gov/gltf_embed/2364"
            width="100%"
            height="450px"
            frameborder="0"
          />
        </div> */}
        <img src={logo} className="App-logo" alt="logo" />
        <HomeTitle>Explore the Solar System</HomeTitle>
        <HomeSubTitle>Take a tour through the galaxy</HomeSubTitle>
      </HomeContainer>
    </>
  );
};

export default Home;
