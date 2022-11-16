import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

const ListItem = styled.li`
  list-style-type: none;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const NavBar = () => {
  return (
    <NavList>
      <ListItem>
        <StyledLink to="/">Home</StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to="/slideshow">Planetarium</StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to="/adddata">Add Data</StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to="/moreinfocomponent">More Info</StyledLink>
      </ListItem>
    </NavList>
  );
};

export default NavBar;
