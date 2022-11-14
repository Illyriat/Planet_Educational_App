import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import CarouselComponent from "../Components/CarouselComponent";
import PlanetList from "../Components/PlanetList";
import Planet from "../Components/Planet";

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
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/slideshow"
            element={<CarouselComponent allPlanets={allPlanets} />}
          />
        </Routes>
      </Router>

      {/* <Planet planets={allPlanets} />
      <PlanetList allPlanets={allPlanets} /> */}
    </>
  );
};

export default PlanetContainer;
