import React from "react";

import facebook from "../Assets/Images/facebook.svg";
import twitter from "../Assets/Images/twitter.svg";
import github from "../Assets/Images/github.svg";
import internet from "../Assets/Images/internet.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <p>© 2021 Themesberg, LLC. All rights reserved.</p>
      </div>

      <div className="footer__right">
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitterr" />
        <img src={github} alt="github" />
        <img src={internet} alt="internet" />
      </div>
    </footer>
  );
};

export default Footer;
