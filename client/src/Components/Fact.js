import React from "react";
import styled from "styled-components";

const RandomFact = styled.div`
  border: 2px solid white;
  height: 14rem;
  width: 14rem;
  position: absolute;
  top: 10%;
  right: 7%;
  color: white;
  padding: 2rem;
`;

const Fact = () => {
  return (
    <RandomFact>
      <h1>Fact</h1>
      <p>Some random fact will go in here</p>
      <button value="More Info">More Facts</button>
    </RandomFact>
  );
};

export default Fact;
