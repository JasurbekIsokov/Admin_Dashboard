import React from "react";

import { Link, useLocation } from "react-router-dom";

import logo from "../Assets/Images/Logo.svg";
import login from "../Assets/Images/login.svg";

const HomeHeader = () => {
  const loc = useLocation();

  return (
    <header className="header">
      <div className="header__left">
        <img src={logo} alt="logo" className="header__left--logo" />
        <nav>
          <ul>
            <li>
              <Link
                to="/"
                style={{ color: loc.pathname == "/" ? "#1C64F2" : "6B7280" }}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                style={{
                  color: loc.pathname == "/team" ? "#1C64F2" : "6B7280",
                }}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                style={{
                  color: loc.pathname == "/projects" ? "#1C64F2" : "6B7280",
                }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/calendar"
                style={{
                  color: loc.pathname == "/calendar" ? "#1C64F2" : "6B7280",
                }}
              >
                Calendar
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                style={{
                  color: loc.pathname == "/contact" ? "#1C64F2" : "6B7280",
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__right">
        <img src={login} alt="login" />
        <Link
          to="/sign-in"
          style={{ color: loc.pathname == "/sign-in" ? "#1C64F2" : "6B7280" }}
        >
          Login
        </Link>
        <p>/</p>

        <Link
          to="/sign-up"
          style={{ color: loc.pathname == "/sign-up" ? "#1C64F2" : "6B7280" }}
        >
          Register
        </Link>
      </div>
      <div className="header__menu"></div>
    </header>
  );
};

export default HomeHeader;
