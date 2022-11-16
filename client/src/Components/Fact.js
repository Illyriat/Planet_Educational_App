import React, { useState } from "react";
import styled from "styled-components";

const RandomFact = styled.div`
  width: 100%;
  color: white;
  margin-top: 2rem;
`;

const Fact = ({ facts }) => {
  const [index, setIndex] = useState(0);

  const generateFact = () => {
    const factNum = Math.floor(Math.random() * facts.length);
    setIndex(factNum);
  };

  return (
    <RandomFact>
      <h1>Fact</h1>
      <p>{facts[index]}</p>
      <button onClick={generateFact}>New Fact</button>
    </RandomFact>
  );
};

export default Fact;
