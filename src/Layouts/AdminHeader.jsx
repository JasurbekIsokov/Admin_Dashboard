import React from "react";

import { Link, useLocation } from "react-router-dom";

import logo from "../Assets/Images/Logo.svg";
import login from "../Assets/Images/login.svg";
import search from "../Assets/Images/search.svg";
import qongiroq from "../Assets/Images/qo'ng'iroq.svg";
import avatar from "../Assets/Images/Avatar.svg";

import GamburderHomeBtn from "../Components/GamburgerHomeBtn";

const AdminHeader = () => {
  return (
    <header className="adminHeader">
      <div className="adminHeader__left">
        <img src={logo} alt="logo" />
        <div className="adminHeader__left--search">
          <img src={search} alt="search icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="adminHeader__right">
        <img src={qongiroq} alt="message" />
        <img src={avatar} alt="profile" />
      </div>
    </header>
  );
};

export default AdminHeader;
