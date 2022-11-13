//BEFORE //

// import { useEffect, useState } from "react";
// import PlanetList from "../Components/PlanetList";
// import Header from "../Components/Header";
// import CarouselComponent from "../Components/CarouselComponent";
// import Planet from "../Components/Planet";

// const PlanetContainer = () => {
//   const [allPlanets, setAllPlanets] = useState([]);

//   const fetchPlanets = () => {
//     fetch("http://localhost:9000/api/planets")
//       .then((response) => response.json())
//       .then((data) => setAllPlanets(data));
//   };
  

//   useEffect(() => {
//     fetchPlanets();
//   }, []);
  

//   return (
//     <>
//       <Header />
//       <CarouselComponent />
//       <Planet planets={allPlanets} />
//       <PlanetList allPlanets={allPlanets} />
//     </>
//   );
// };

// export default PlanetContainer;

// --------------------------------------------------------->>>>>>>>>>>>>


///AFTER:


import { useEffect, useState } from "react";
import PlanetList from "../Components/PlanetList";
import Header from "../Components/Header";
import CarouselComponent from "../Components/CarouselComponent";
import Planet from "../Components/Planet";

const PlanetContainer = () => {
  const [allPlanets, setAllPlanets] = useState([]);
  //ADDED 3
  const [selectedPlanet, setSelectedPlanet] = useState('');
  //----->

  //ADDED 1
  async function fetchPlanets () {
    const response = await fetch ("http://localhost:9000/api/planets")
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
  ///ADDED 2 // 
  function findPlanetById(_id) {
    return allPlanets.find(planet => planet._id === _id);
  }

  const handleSelectedPlanet = _id => {
    setSelectedPlanet(_id)
  }

  //___>>

  return (
    <>
      <Header />
      <CarouselComponent planets={allPlanets} changeHandler={
        (_id) => {
          const planet = findPlanetById(_id);
          setSelectedPlanet(planet);
        }
      }/>
      <Planet allPlanets={selectedPlanet} />
      <PlanetList allPlanets={allPlanets} onPlanetSelected={handleSelectedPlanet}/>
    </>
  );
};
//ANTES
//   return (
//     <>
//       <Header />
//       <CarouselComponent />
//       <Planet planets={allPlanets} />
//       <PlanetList allPlanets={allPlanets} />
//     </>
//   );
// };

export default PlanetContainer;