import React from "react";

import Customers from "../Components/Customers";
import Products from "../Components/Products";
import AdminHeader from "../Layouts/AdminHeader";
import Footer from "../Layouts/Footer";
import Sidebar from "../Layouts/Sidebar";

const Admin = () => {
  return (
    <div className="adminPage">
      <AdminHeader />
      <div className="adminPage__section">
        <div className="adminPage__section--saidbar">
          <Sidebar />
        </div>
        <div className="adminPage__section--left">
          <div className="adminPage__section--data">
            <Customers />
            <Products />
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
