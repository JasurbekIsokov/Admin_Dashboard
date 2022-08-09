import React from "react";
import avatar from "../Assets/Images/Avatar2.svg";

const Customers = () => {
  return (
    <div className="customers">
      <p className="customers__title">Latest Customers</p>
      <div className="customers__box">
        <div className="customers__box--left">
          <img src={avatar} alt="customers" />
          <div className="customers__box--left-title">
            <p className="name">Neil Sims</p>
            <p className="email">email@example.com</p>
          </div>
        </div>
        <p className="customers__box--right">$367</p>
      </div>
      <hr />
    </div>
  );
};

export default Customers;
