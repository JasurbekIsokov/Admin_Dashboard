import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeHeader from "./Layouts/HomeHeader";
import AdminHeader from "./Layouts/AdminHeader";
import Footer from "./Layouts/Footer";
import Sidebar from "./Layouts/Sidebar";
import Customers from "./Components/Customers";
import Products from "./Components/Products";
import Transactions from "./Components/Transactions";

import Admin from "./Pages/Admin";

import "./Assets/Styles/homeHeader.scss";
import "./Assets/Styles/adminHeader.scss";
import "./Assets/Styles/sidebar.scss";
import "./Assets/Styles/footer.scss";
import "./Assets/Styles/gamburgerHomeBtn.scss";
import "./Assets/Styles/customer.scss";
import "./Assets/Styles/products.scss";
import "./Assets/Styles/transactions.scss";

import "./Assets/Styles/adminPage.scss";

import "./Assets/Styles/index.scss";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomeHeader />}></Route> */}
        {/* <Route path="/" element={<AdminHeader />}></Route> */}
        {/* <Route path="/" element={<Footer />}></Route> */}
        {/* <Route path="/" element={<Sidebar />}></Route> */}
        {/* <Route path="/" element={<Customers />}></Route> */}
        {/* <Route path="/" element={<Products />}></Route> */}

        {/* <Route path="/" element={<Admin />}></Route> */}

        <Route path="/" element={<Transactions />}></Route>

        {/* <Route path="*" element={<Stock />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
