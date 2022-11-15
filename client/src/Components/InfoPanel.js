import React from "react";
import styled from "styled-components";

const Info = styled.div`
  position: absolute;
  top: 10%;
  right: 10%;
  color: white;
`;

const InfoTitle = styled.h2`
  border-bottom: 2px solid white;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

const InfoPanel = ({ temp, mass, days, radius, satellites }) => {
  return (
    <Info>
      <h4>Mass:</h4>
      <InfoTitle>{mass}</InfoTitle>
      <h4>Temperature:</h4>
      <InfoTitle>{temp} &#176;Kelvin</InfoTitle>
      <h4>Days in a year:</h4>
      <InfoTitle>{days}</InfoTitle>
      <h4>Radius:</h4>
      <InfoTitle>{radius}</InfoTitle>
      <h4>Satellites:</h4>
      <InfoTitle>{satellites}</InfoTitle>
    </Info>
  );
};

export default InfoPanel;
