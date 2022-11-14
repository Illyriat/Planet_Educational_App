import React from "react";
import "./Planet.css";

const Planet = ({ name, mass, radius, period, fun_facts }) => {
  return (
    <div className="planet-details">
      <h2>{name}</h2>
      <p>
        Description about the planet to go here. Maybe a link to another page
        with extra info bout that planet
      </p>
      <hr></hr>
      <h4>Period</h4>
      <h2>{period}</h2>
      <hr></hr>
      <h4>Mass: {mass}</h4>
      <hr></hr>
      <h4>Radius:{radius}</h4>
      <hr></hr>
      <h4>Fun Facts:{fun_facts}</h4>
    </div>
  );
};

export default Planet;
