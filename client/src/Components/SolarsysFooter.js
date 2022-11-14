import React from "react";
import "./SolarsysFooter.css";
import PlanetList from "./PlanetList";


const SolarsysFooter = ({allPlanets}) => {
    {allPlanets.map( (planet, index) => {

        return (
          <div key= {index} className="footer">
            <h3>Solar System </h3>
            <h3>Moons:{planet.satellites}</h3>
            <h3>Missons:{}</h3>
    
          </div>
        );
    })

  }};
  
  export default SolarsysFooter;
  

