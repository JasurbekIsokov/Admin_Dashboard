import React from "react";

const Customers = () => {
  return (
    <div className="customers">
      <p className="customers__title">Latest Customers</p>

      <div className="customers__box">
        <div className="customers__box--left">
          <div className="customer1Image customerImage"></div>
          <div className="customers__box--left-title">
            <p className="name">Neil Sims</p>
            <p className="email">email@example.com</p>
          </div>
        </div>
        <p className="customers__box--right">$367</p>
      </div>
      <hr />

      <div className="customers__box">
        <div className="customers__box--left">
          <div className="customer2Image customerImage"></div>
          <div className="customers__box--left-title">
            <p className="name">Bonnie Green</p>
            <p className="email">email@example.com</p>
          </div>
        </div>
        <p className="customers__box--right">$67</p>
      </div>
      <hr />

      <div className="customers__box">
        <div className="customers__box--left">
          <div className="customer3Image customerImage"></div>
          <div className="customers__box--left-title">
            <p className="name">Micheal Gough</p>
            <p className="email">email@example.com</p>
          </div>
        </div>
        <p className="customers__box--right">$3467</p>
      </div>
      <hr />

      <div className="customers__box">
        <div className="customers__box--left">
          <div className="customer4Image customerImage"></div>
          <div className="customers__box--left-title">
            <p className="name">Thomas Lean</p>
            <p className="email">email@example.com</p>
          </div>
        </div>
        <p className="customers__box--right">$2367</p>
      </div>
      <hr />

      <div className="customers__box">
        <div className="customers__box--left">
          <div className="customer5Image customerImage"></div>
          <div className="customers__box--left-title">
            <p className="name">Lana Byrd</p>
            <p className="email">email@example.com</p>
          </div>
        </div>
        <p className="customers__box--right">$367</p>
      </div>
      <hr />

      <div className="customers__box">
        <div className="customers__box--left">
          <div className="customer6Image customerImage"></div>
          <div className="customers__box--left-title">
            <p className="name">Karen Nelson</p>
            <p className="email">email@example.com</p>
          </div>
        </div>
        <p className="customers__box--right">$1367</p>
      </div>
      <hr />
    </div>
  );
};

export default Customers;
