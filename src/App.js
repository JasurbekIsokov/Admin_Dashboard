import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Team from "./Pages/Team";
import Message from "./Pages/Message";
import Projects from "./Pages/Projects";
import Calendar from "./Pages/Calendar";

import "./Assets/Styles/chart.scss";
import "./Assets/Styles/footer.scss";
import "./Assets/Styles/contact.scss";
import "./Assets/Styles/sidebar.scss";
import "./Assets/Styles/message.scss";
import "./Assets/Styles/customer.scss";
import "./Assets/Styles/products.scss";
import "./Assets/Styles/homeHeader.scss";
import "./Assets/Styles/loginIndex.scss";
import "./Assets/Styles/getMessage.scss";
import "./Assets/Styles/adminHeader.scss";
import "./Assets/Styles/transactions.scss";
import "./Assets/Styles/gamburgerHomeBtn.scss";

import "./Assets/Styles/forom.scss";

import "./Assets/Styles/homePage.scss";
import "./Assets/Styles/adminPage.scss";

import "./Assets/Styles/index.scss";
import Contact from "./Pages/Contact";
import SignIn from "./Pages/Login";
import SignUn from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import Profile from "./Pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Admin />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/calendar" element={<Calendar />}></Route>
        <Route path="/login/message" element={<Message />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUn />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
