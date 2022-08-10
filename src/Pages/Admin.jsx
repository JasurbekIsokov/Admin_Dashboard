import React from "react";

import AdminHeader from "../Layouts/AdminHeader";
import Sidebar from "../Layouts/Sidebar";
import Customers from "../Components/Customers";
import Products from "../Components/Products";
import Transactions from "../Components/Transactions";
import Footer from "../Layouts/Footer";
import DemoLine from "../Components/Chart";

const Admin = () => {
  return (
    <div className="adminPage">
      <AdminHeader />
      <div className="adminPage__section">
        <div className="adminPage__section--saidbar">
          <Sidebar />
        </div>
        <div className="adminPage__section--left">
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
