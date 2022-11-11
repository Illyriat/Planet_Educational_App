import { useEffect, useState } from "react";
import PlanetList from "../Components/PlanetList";
import Header from "../Components/Header";
import CarouselComponent from "../Components/CarouselComponent";

const PlanetContainer = () => {
  const [allPlanets, setAllPlanets] = useState([]);

  const fetchPlanets = () => {
    fetch("http://localhost:9000/api/planets")
      .then((response) => response.json())
      .then((data) => setAllPlanets(data));
  };
  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <>
      <Header />
      <CarouselComponent />
      <PlanetList allPlanets={allPlanets} />
    </>
  );
};

export default PlanetContainer;
