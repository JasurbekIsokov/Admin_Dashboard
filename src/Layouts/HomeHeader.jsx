import React from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../Assets/Images/Logo.svg";
import login from "../Assets/Images/login.svg";
import GamburderHomeBtn from "../Components/GamburgerHomeBtn";

const HomeHeader = () => {
  // const loc = useLocation();
  // console.log(loc.pathname);

  return (
    <header className="header">
      <div className="header__left">
        <img src={logo} alt="logo" className="header__left--logo" />
        <nav>
          <ul>
            <li>
              <Link className="link" to="/">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Team
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Projects
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Calendar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__right">
        <img src={login} alt="login" />
        <Link className="link" to="/">
          Login
        </Link>
        <p>/</p>
        <Link className="link" to="/">
          Register
        </Link>
      </div>
      <div className="header__menu">
        <GamburderHomeBtn />
      </div>
    </header>
  );
};

export default HomeHeader;
