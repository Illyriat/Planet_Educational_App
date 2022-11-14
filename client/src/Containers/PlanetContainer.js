import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import CarouselComponent from "../Components/CarouselComponent";

const PlanetContainer = () => {
  const [allPlanets, setAllPlanets] = useState([]);

  //ADDED 1
  async function fetchPlanets() {
    const response = await fetch("http://localhost:9000/api/planets");
    const data = await response.json();
    setAllPlanets(data);
  }
  //---->
  // PREVIOUS //
  // const fetchPlanets = () => {
  //   fetch("http://localhost:9000/api/planets")
  //     .then((response) => response.json())
  //     .then((data) => setAllPlanets(data));
  // };
  // ----->

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
    </>
  );
};

export default PlanetContainer;
