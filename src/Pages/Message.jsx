import React, { useState, useEffect } from "react";

import AdminHeader from "../Layouts/AdminHeader";
import Sidebar from "../Layouts/Sidebar";
import GetMessage from "../Components/GetMessage";
import Products from "../Components/Products";
import Footer from "../Layouts/Footer";

const Message = () => {
  const [test, setTest] = useState("block");
  const [img, setImg] = useState(true);

  const [windowSize, setWindowSize] = useState(getWindowSize());

  const sidebarDisplay = () => {
    windowSize <= 768 ? setTest("none") : setTest("block");
  };

  useEffect(() => {
    sidebarDisplay();
  }, []);

  useEffect(() => {
    sidebarDisplay();
  }, [windowSize]);

  const myFunction = () => {
    if (test === "block") {
      setTest("none");
      setImg(true);
    } else {
      setTest("block");
      setImg(false);
    }
  };

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return innerWidth;
  }

  return (
    <div className="message">
      <AdminHeader myFunction={myFunction} img={img} />
      <div className="message__section">
        <div className="message__section--saidbar" style={{ display: test }}>
          <Sidebar />
        </div>

        <div className="message__section--right">
          <div className="message__section--data">
            <GetMessage />
          </div>

          <div className="message__section--footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
