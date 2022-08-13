import React from "react";
import HomeHeader from "../Layouts/HomeHeader";

const Home = () => {
  return (
    <div className="homePage">
      <HomeHeader />
      <div className="homePage__main">
        <i className="fa-solid fa-house-chimney"></i>
      </div>
    </div>
  );
};

export default Home;
