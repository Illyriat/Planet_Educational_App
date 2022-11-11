import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Planet from "./Planet";
import Venus from "../images/venus.jpg";
import Mercury from "../images/Mercury.jpg";
import Pluto from "../images/pluto.jpg";

function CarouselComponent() {
  return (
    <Carousel className="carousel-container" interval={null}>
      <Carousel.Item>
        <img className="d-block w-100" src={Mercury} alt="First slide" />
        <Planet />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Venus} alt="Second slide" />
        <Planet />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Pluto} alt="Third slide" />
        <Planet />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Pluto} alt="Third slide" />
        <Planet />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Pluto} alt="Third slide" />
        <Planet />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Pluto} alt="Third slide" />
        <Planet />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Pluto} alt="Third slide" />
        <Planet />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Pluto} alt="Third slide" />
        <Planet />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Pluto} alt="Third slide" />
        <Planet />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
