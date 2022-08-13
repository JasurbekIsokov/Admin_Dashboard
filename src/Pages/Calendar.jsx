import React from "react";
import HomeHeader from "../Layouts/HomeHeader";

const Calendar = () => {
  return (
    <div className="calendarPage">
      <HomeHeader />
      <div className="calendarPage__main">
        <i className="fa-solid fa-calendar-check"></i>
      </div>
    </div>
  );
};

export default Calendar;
