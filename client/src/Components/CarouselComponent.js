import React from "react";
import Carousel from "react-bootstrap/Carousel";
import PlanetInfo from "./PlanetInfo";
import PlanetTitle from "./PlanetTitle";
import Venus from "../images/venus.jpg";
import Mercury from "../images/Mercury.jpg";
import Pluto from "../images/pluto.jpg";
import { Animated } from "react-animated-css";

function CarouselComponent() {
  return (
    <Carousel className="carousel-container" interval={null}>
      <Carousel.Item>
        <Animated animationIn="wobble" animationOut="fadeOut" isVisible={true}>
          <PlanetTitle />
        </Animated>
        <img className="d-block w-100" src={Mercury} alt="First slide" />
        {/* <Carousel.Caption>
          <h3>Mercury</h3>
          <p>Description to go here.</p>
        </Carousel.Caption> */}
        <PlanetInfo />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Venus} alt="Second slide" />
        {/* <Carousel.Caption>
          <h3>Venus</h3>
          <p>Description to go here</p>
        </Carousel.Caption> */}
        <PlanetInfo />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Pluto} alt="Third slide" />
        <PlanetInfo />
        {/* <Carousel.Caption>
          <h3>Pluto</h3>
          <p>Description to go here</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
