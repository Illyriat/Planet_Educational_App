import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import CarouselComponent from "../Components/CarouselComponent";
import AddData from "../Components/AddData";
import MoreInfoComponent from "../Components/MoreInfoComponent";

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
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/slideshow"
            element={<CarouselComponent allPlanets={allPlanets} />}
          />
          <Route path="/adddata" element={<AddData />} />
          <Route path="/moreinfo" element={<MoreInfoComponent />} />

        </Routes>
      </Router>
    </>
  );
};

export default PlanetContainer;
