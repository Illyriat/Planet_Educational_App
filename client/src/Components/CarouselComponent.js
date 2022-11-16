import React, { useState } from "react";
import styled from "styled-components";
import Fact from "../Components/Fact";
import InfoPanel from "../Components/InfoPanel";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./CarouselComponent.css";
import {Link} from "react-router-dom";

const PlanetTitle = styled.h1`
  font-size: 4rem;
  border-bottom: 2px solid #fff;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
`;

const FactContainer = styled.div`
  width: 18%;
  @media (max-width: 1320px) {
    width: 50%;
  }
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
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {allPlanets.map((planet, index) => {
        return (
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
                      <div>
                        <PlanetTitle>{planet.name}</PlanetTitle>
                        <Description>{planet.description}</Description>
                        <Link to = "/moreinfo">
                        <button>More Info</button>
                        </Link>
                      </div>
                      <Fact facts={planet.fun_fact} />

                    </div>
                    <Fact facts={planet.fun_fact} />
                  </FactContainer>

                  <InfoPanel
                    mass={planet.mass}
                    temp={planet.temperature}
                    radius={planet.radius}
                    days={planet.period}
                    satellites={planet.satellites}
                  />
                </div>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Imageslider;
