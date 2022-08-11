import React from "react";

import { Link, useLocation } from "react-router-dom";

import logo from "../Assets/Images/Logo.svg";
import login from "../Assets/Images/login.svg";
import search from "../Assets/Images/search.svg";
import qongiroq from "../Assets/Images/qo'ng'iroq.svg";
import avatar from "../Assets/Images/Avatar.svg";
import vector from "../Assets/Images/menu-alt.svg";
import vector2 from "../Assets/Images/vector2.svg";

import GamburderHomeBtn from "../Components/GamburgerHomeBtn";

const AdminHeader = ({ myFunction, img }) => {
  return (
    <header className="adminHeader">
      <div className="adminHeader__left">
        <img src={logo} alt="logo" className="adminHeader__left--logo" />
        <div onClick={myFunction} className="adminHeader__left--vector">
          <img src={img ? vector : vector2} alt="vector" />
        </div>
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
