import React from "react";

import overview from "../Assets/Images/overview.svg";
import pages from "../Assets/Images/pages.svg";
import sales from "../Assets/Images/sales.svg";
import message from "../Assets/Images/message.svg";
import auth from "../Assets/Images/auth.svg";
import docs from "../Assets/Images/docs.svg";
import components from "../Assets/Images/components.svg";
import help from "../Assets/Images/help.svg";
import strelka from "../Assets/Images/strelka.svg";
import internet from "../Assets/Images/internet.svg";
import internet1 from "../Assets/Images/internet1.svg";
import nastroyka from "../Assets/Images/nastroyka.svg";
import nastroyka2 from "../Assets/Images/nastroyka2.svg";

import { useState } from "react";

const Sidebar = () => {
  let [testArrow, setTestArrow] = useState(false);
  let [testArrow2, setTestArrow2] = useState(false);
  let [testArrow3, setTestArrow3] = useState(false);

  let [display, setDisplay] = useState("none");
  let [display2, setDisplay2] = useState("none");
  let [display3, setDisplay3] = useState("none");

  const clickBtn = () => {
    if (!testArrow) {
      setTestArrow(true);
    } else if (testArrow) {
      setTestArrow(false);
    }

    if (display === "none") {
      setDisplay("inline-block");
    } else {
      setDisplay("none");
    }
  };

  const clickBtn2 = () => {
    if (!testArrow2) {
      setTestArrow2(true);
    } else if (testArrow2) {
      setTestArrow2(false);
    }

    if (display2 === "none") {
      setDisplay2("inline-block");
    } else {
      setDisplay2("none");
    }
  };

  const clickBtn3 = () => {
    if (!testArrow3) {
      setTestArrow3(true);
    } else if (testArrow3) {
      setTestArrow3(false);
    }

    if (display3 === "none") {
      setDisplay3("inline-block");
    } else {
      setDisplay3("none");
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar__row overview">
        <img src={overview} alt="overview" />
        <p className="sidebar__row--title">Overview</p>
      </div>

      <div className="sidebar__fixRow">
        <div className="sidebar__fixRow--top" onClick={clickBtn}>
          <div className="sidebar__fixRow--top-left">
            <img src={pages} alt="pages" />
            <p>Pages</p>
          </div>

          <img src={strelka} alt="arrow" className={testArrow ? "aylan" : ""} />
        </div>

        <ul style={{ display: display }}>
          <li>Page-1</li>
          <li>Page-1</li>
          <li>Page-1</li>
          <li>Page-1</li>
        </ul>
      </div>

      <div className="sidebar__fixRow">
        <div className="sidebar__fixRow--top" onClick={clickBtn2}>
          <div className="sidebar__fixRow--top-left">
            <img src={sales} alt="pages" />
            <p>Sales</p>
          </div>

          <img
            src={strelka}
            alt="arrow"
            className={testArrow2 ? "aylan" : ""}
          />
        </div>

        <ul style={{ display: display2 }}>
          <li>Product List</li>
          <li>Billing</li>
          <li>Invoice</li>
        </ul>
      </div>

      <div className="sidebar__fixRow">
        <div className="sidebar__fixRow--top">
          <div className="sidebar__fixRow--top-left">
            <img src={message} alt="pages" />
            <p>Message</p>
          </div>

          <p className="message__sum">1</p>
        </div>
      </div>

      <div className="sidebar__fixRow">
        <div className="sidebar__fixRow--top" onClick={clickBtn3}>
          <div className="sidebar__fixRow--top-left">
            <img src={sales} alt="pages" />
            <p>Authentication</p>
          </div>

          <img
            src={strelka}
            alt="arrow"
            className={testArrow3 ? "aylan" : ""}
          />
        </div>

        <ul style={{ display: display3 }}>
          <li>Authentication 1</li>
          <li>Authentication 2</li>
        </ul>
      </div>

      <hr className="line" />

      <div className="sidebar__row ">
        <img src={docs} alt="docs" />
        <p className="sidebar__row--title">Docs</p>
      </div>

      <div className="sidebar__row ">
        <img src={components} alt="components" />
        <p className="sidebar__row--title">Components</p>
      </div>

      <div className="sidebar__row ">
        <img src={help} alt="help" />
        <p className="sidebar__row--title">Help</p>
      </div>

      <div className="sidebar__bottom">
        <img src={nastroyka2} alt="nastroyka2" />
        <img src={internet} alt="internet" />
        <img src={nastroyka} alt="nastroyka" />
      </div>
    </div>
  );
};

export default Sidebar;
