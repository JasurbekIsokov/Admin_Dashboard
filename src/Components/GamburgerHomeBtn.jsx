import React, { useState } from "react";
import { Link } from "react-router-dom";

import vector from "../Assets/Images/menu-alt.svg";
import vector2 from "../Assets/Images/vector2.svg";

const GamburderHomeBtn = () => {
  const [test, setTest] = useState("none");
  const [img, setImg] = useState(true);

  const myFunction = () => {
    if (test === "block") {
      setTest("none");
      setImg(true);
    } else {
      setTest("block");
      setImg(false);
    }
  };

  return (
    <>
      <div className="mobile_button">
        <div onClick={myFunction} className=" ">
          <img src={img ? vector : vector2} alt="vector" />
        </div>
      </div>

      <div className="mobile" style={{ display: test }}>
        <div className="mobile__language">
          <Link className="mobile__language--title" to="/">
            Dashboard
          </Link>
          <Link className="mobile__language--title" to="/team">
            Team
          </Link>
          <Link className="mobile__language--title" to="/projects">
            Projects
          </Link>
          <Link className="mobile__language--title" to="/calendar">
            Calendar
          </Link>
          <Link className="mobile__language--title" to="/login">
            Login
          </Link>
          <Link className="mobile__language--title" to="/">
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default GamburderHomeBtn;
