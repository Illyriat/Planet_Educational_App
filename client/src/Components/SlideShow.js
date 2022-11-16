import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CarouselComponent from "../Components/CarouselComponent";
import styled from "styled-components";

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  overflow: auto;
`;

const SlideShow = ({ allPlanets }) => {
  return (
    <>
      <SlideContainer>
        <Header />
        <CarouselComponent allPlanets={allPlanets} />
        <Footer />
      </SlideContainer>
    </>
  );
};

export default SlideShow;
