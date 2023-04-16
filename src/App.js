import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Team from "./Pages/Team";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import SignIn from "./Pages/Login";
import SignUn from "./Pages/Register";
import Page404 from "./Pages/Page404";
import Contact from "./Pages/Contact";
import Calendar from "./Pages/Calendar";
import Projects from "./Pages/Projects";
import ForgotPassword from "./Pages/ForgotPassword";

import "./Assets/Styles/index.scss";
import "./Assets/Styles/forom.scss";
import "./Assets/Styles/footer.scss";
import "./Assets/Styles/contact.scss";
import "./Assets/Styles/sidebar.scss";
import "./Assets/Styles/page404.scss";
import "./Assets/Styles/customer.scss";
import "./Assets/Styles/products.scss";
import "./Assets/Styles/homePage.scss";
import "./Assets/Styles/adminPage.scss";
import "./Assets/Styles/homeHeader.scss";
import "./Assets/Styles/loginIndex.scss";
import "./Assets/Styles/transactions.scss";
import "./Assets/Styles/adminHeader.scss";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUn />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
      {/* <Team /> */}
    </>
  );
}

export default App;
