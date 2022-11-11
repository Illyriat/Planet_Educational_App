import { useEffect, useState } from "react";
import CarouselComponent from "../Components/CarouselComponent";
import PlanetInfo from "../Components/PlanetInfo";
import Header from "../Components/Header";

const PlanetContainer = () => {
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = () => {
    fetch("http://localhost:9000/api/planets")
      .then((response) => response.json())
      .then((planets) => setPlanets(planets));
  };
  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <>
      <Header />
      <CarouselComponent />
      <PlanetInfo planets={planets} />
    </>
  );
};

export default PlanetContainer;
