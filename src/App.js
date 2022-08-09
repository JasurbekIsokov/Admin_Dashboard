import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeHeader from "./Layouts/HomeHeader";

import "./Assets/Styles/homeHeader.scss";
import "./Assets/Styles/adminHeader.scss";
import "./Assets/Styles/sidebar.scss";
import "./Assets/Styles/footer.scss";
import "./Assets/Styles/gamburgerHomeBtn.scss";

import "./Assets/Styles/index.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeHeader />}></Route>

        {/* <Route path="*" element={<Stock />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
