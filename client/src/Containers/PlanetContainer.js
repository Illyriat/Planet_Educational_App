import { useEffect, useState } from "react";
import PlanetList from "../Components/PlanetList";
import Header from "../Components/Header";
import CarouselComponent from "../Components/CarouselComponent";
import Planet from "../Components/Planet";
import SolarsysFooter from "../Components/SolarsysFooter"


const PlanetContainer = () => {
  const [allPlanets, setAllPlanets] = useState([]);
  // const [allMissions, setAllMissions] = useState([]);

  const fetchPlanets = () => {
    fetch("http://localhost:9000/api/planets")
      .then((response) => response.json())
      .then((data) => setAllPlanets(data));

  // const fetchMissions = () => {
  //   fetch("https://api.le-systeme-solaire.net/rest/bodies/")
  //     .then((response) => response.json())
  //     .then((data) => setAllMissions(data));
    
  };
  useEffect(() => {
    fetchPlanets();
    // fetchMissions();
  }, []);

  return (
    <>
      <Header />
      <CarouselComponent />
      <Planet planets={allPlanets} />
      <PlanetList allPlanets={allPlanets} />
      <SolarsysFooter allPlanets={allPlanets}/>
    </>
  );
}

export default PlanetContainer;
