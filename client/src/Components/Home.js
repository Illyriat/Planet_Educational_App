import React from "react";
import "./Home.css";
import Header from "../Components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-text">
        <h4 className="home-text">Explore Our Solar system</h4>
        <p className="home-text">Take a tour through the galaxy</p>
      </div>
    </>
  );
};

export default Home;
