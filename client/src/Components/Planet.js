import React from "react";
import "./Planet.css";


const Planet = ({ name, mass, radius, period, fun_fact, satellites}) => {

  return (
    <div className="planet-details">
      <h2>{name}</h2>
      <h4>Description</h4>
      <h6>{fun_fact}</h6>
      <hr></hr>
      <h4>Period</h4>
      <h2>{period}</h2>
      <hr></hr>
      <h4>Mass: {mass}</h4>
      <hr></hr>
      <h4>Radius:{radius}</h4>
      <h4>Satellites:{satellites}</h4>
      <hr></hr>
      <h4>Fun Facts:{fun_facts}</h4>
    </div>
  );
};

export default Planet;
