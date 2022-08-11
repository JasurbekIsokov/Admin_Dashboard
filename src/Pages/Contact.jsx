import React from "react";

import Forom from "./Forom";
import HomeHeader from "../Layouts/HomeHeader";

const Contact = () => {
  return (
    <div className="contactPage">
      <HomeHeader />
      <div className="contactPage__section">
        <Forom />
      </div>
    </div>
  );
};

export default Contact;
