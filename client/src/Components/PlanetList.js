import React from "react";
import Planet from "./Planet";

const PlanetList = ({ allPlanets }) => {
  return (
    <>
      {allPlanets.map((planet) => {
        return (
          <Planet
            key={planet._id}
            name={planet.name}
            mass={planet.mass}
            radius={planet.radius}
            period={planet.period}
          />
        );
      })}
    </>
  );
};

export default PlanetList;


//BEFORE----------------------------------------->>>>
// import React from "react";
// import Planet from "./Planet";

// const PlanetList = ({ allPlanets }) => {
//   return (
//     <>
//       {allPlanets.map((planet) => {
//         return (
//           <Planet
//             key={planet.id}
//             name={planet.name}
//             mass={planet.mass}
//             radius={planet.radius}
//             period={planet.period}
//           />
//         );
//       })}
//     </>
//   );
// };

// export default PlanetList;
