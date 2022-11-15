import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    -webkit-border-radius: 5;
    -moz-border-radius: 5;
    border-radius: 5px;
    -webkit-box-shadow: 0px 1px 8px #666666;
    -moz-box-shadow: 0px 1px 8px #666666;
    box-shadow: 0px 1px 8px #666666;
    font-family: Arial;
    color: #ffffff;
    font-size: 20px;
    background: #070808;
    padding: 5px 17px 5px 17px;
    border: solid #7b7980 2px;
    text-decoration: none;
  `;
  

const Button = () => {
    return (
            <StyledLink to="/MoreInfo"/>
    )
}