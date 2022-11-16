import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import CarouselComponent from "../Components/CarouselComponent";
import SlideShow from "../Components/SlideShow";
import AddData from "../Components/AddData";
import MoreInfo from "../Components/MoreInfoComponent";

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
          {/* <Route
            path="/slideshow"
            element={<CarouselComponent allPlanets={allPlanets} />}
          /> */}
          <Route
            path="/testslideshow"
            element={<SlideShow allPlanets={allPlanets} />}
          />
          <Route path="/adddata" element={<AddData />} />
          <Route path="/moreinfocomponent" element={<MoreInfo />} />
        </Routes>
      </Router>
    </>
  );
};

export default PlanetContainer;
