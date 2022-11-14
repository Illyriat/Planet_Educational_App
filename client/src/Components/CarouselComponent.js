import React, { useState } from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./CarouselComponent.css";

const PlanetTitle = styled.h1`
  font-size: 4rem;
  border-bottom: 2px solid #fff;
`;

const Imageslider = ({ allPlanets }) => {
  const [current, setCurrent] = useState(0);
  const length = allPlanets.length;

  const nextSlide = () => {
    //if current = last item in the array set back to 0 else add 1
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    //if current planet is 0 set length to minus 1 else add 1
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  //if there is no data return null or data is not an array.
  if (!Array.isArray(allPlanets) || allPlanets.length <= 0) {
    return null;
  }

  return (
    <>
      <Header />

      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {allPlanets.map((planet, index) => {
          return (
            <>
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <>
                    <img
                      src={require("../images/" + planet.img)}
                      alt=""
                      className="image"
                    />
                    <div key={planet._id} className="planet-info">
                      <PlanetTitle>{planet.name}</PlanetTitle>

                      <h4>{planet.description}</h4>

                      <p>Mass:</p>
                      <h3>{planet.mass}</h3>

                      <p>radius:</p>
                      <h3>{planet.radius}</h3>

                      <p>period:</p>
                      <h3>{planet.period} days</h3>

                      <p>temperature:</p>
                      <h3>{planet.temperature}</h3>

                      <p>satellites:</p>
                      <h3>{planet.satellites}</h3>
                      <button value="More Info">More Info</button>
                    </div>
                  </>
                )}
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Imageslider;
