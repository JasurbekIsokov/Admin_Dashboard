import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import HomeHeader from "../Layouts/HomeHeader";

const Page404 = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  return (
    <>
      <HomeHeader />
      <div className="page404">
        <div className="page404__top"></div>
        <p className="page404__notFound">Page not found</p>
        <p className="page404__description">
          Oops! Looks like you followed a bad link. If you think this is a
          problem with us, please tell us.
        </p>
        <div className="page404__button">
          <button onClick={onClick}>Go back Home</button>
        </div>
      </div>
    </>
  );
};

export default Page404;
