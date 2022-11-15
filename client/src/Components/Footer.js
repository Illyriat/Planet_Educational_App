import React from "react";
import styled from "styled-components";

const BottomFooter = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: #b90005;
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <BottomFooter>
      <p>
        Copyright &copy; Raquel Revelles, James Robson, Benjamin Rew and Steven
        Perry
      </p>
    </BottomFooter>
  );
};

export default Footer;
