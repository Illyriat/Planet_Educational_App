import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Planet from "./Planet";
import Header from "./Header";
import Venus from "../images/venus.jpg";
import Mercury from "../images/Mercury.jpg";
import Earth from "../images/earth.jpg";
import Mars from "../images/mars.jpg";
import Jupiter from "../images/jupiter.jpg";
import Neptune from "../images/neptune.jpg";
import Uranus from "../images/uranus.jpg";
import Saturn from "../images/saturn.jpg";

// Somehow turn this into a list with the data stored in each carousel item
// Could return Carousel Item
// for everyitem in the all planets List return
function CarouselComponent({ allPlanets }) {
  return (
    <>
      <Header />
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
          <img className="d-block w-100" src={Earth} alt="Third slide" />
          <Planet />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Mars} alt="Third slide" />
          <Planet />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Jupiter} alt="Third slide" />
          <Planet />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Saturn} alt="Third slide" />
          <Planet />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Venus} alt="Third slide" />
          <Planet />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Uranus} alt="Third slide" />
          <Planet />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Neptune} alt="Third slide" />
          <Planet />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselComponent;

{
  /* <Carousel className="carousel-container" interval={null}>
  {allPlanets.map((planets) => {
    return (
      <Carousel.Item>
        <img className="d-block w-100" src={Mercury} alt="First slide" />
        <h1>{planets.name}</h1>
      </Carousel.Item>
    );
  })}
</Carousel>; */
}
