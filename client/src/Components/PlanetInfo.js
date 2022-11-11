import React from "react";
import "./PlanetInfo.css";

const PlanetInfo = () => {
  return (
    <div className="planet-info">
      <h2>Planet Name</h2>
      <p>
        Description about the planet to go here. Maybe a link to another page
        with extra info bout that planet
      </p>
      <hr></hr>
      <h4>Distance from the sun:</h4>
      <h2>XXXXXXXXX</h2>
      <hr></hr>
      <h4>Solar Cycle:</h4>
      <h2>XXXXXXXXX</h2>
      <hr></hr>
      <h4>Size:</h4>
      <h2>XXXXXXXXX</h2>
    </div>
  );
};

export default PlanetInfo;
