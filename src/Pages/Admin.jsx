import React, { useState, useEffect } from "react";

import AdminHeader from "../Layouts/AdminHeader";
import Sidebar from "../Layouts/Sidebar";
import Customers from "../Components/Customers";
import Products from "../Components/Products";
import Transactions from "../Components/Transactions";
import Footer from "../Layouts/Footer";
import DemoLine from "../Components/Chart";

const Admin = () => {
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

  // console.log(windowSize);

  return (
    <div className="adminPage">
      <AdminHeader myFunction={myFunction} img={img} />
      <div className="adminPage__section">
        <div className="adminPage__section--saidbar" style={{ display: test }}>
          <Sidebar />
        </div>
        <div className="adminPage__section--right">
          <div className="adminPage__section--chart">
            <p className="adminPage__section--chart-title">
              Sales <span>!</span>
            </p>
            <DemoLine />
          </div>
          <div className="adminPage__section--data">
            <Customers />
            <Products />
          </div>
          <div className="adminPage__section--transaction">
            <Transactions />
          </div>
          <div className="adminPage__section--footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
