import React from "react";

const Products = () => {
  return (
    <div className="products">
      <p className="products__title">Top products</p>

      <div className="products__box">
        <div className="products__box--left">
          <div className="products__box--left-title">
            <p className="name">Restourant Booking App</p>
            <p className="email">React & Bootstrap Framework</p>
          </div>
        </div>
        <p className="products__box--right">
          70 <span>sales</span>
        </p>
      </div>
      <hr />

      <div className="products__box">
        <div className="products__box--left">
          <div className="products__box--left-title">
            <p className="name">UI kit</p>
            <p className="email">React & Bootstrap Framework</p>
          </div>
        </div>
        <p className="products__box--right">
          54 <span>sales</span>
        </p>
      </div>
      <hr />

      <div className="products__box">
        <div className="products__box--left">
          <div className="products__box--left-title">
            <p className="name">Design System Pro</p>
            <p className="email">Bootstrap Framework</p>
          </div>
        </div>
        <p className="products__box--right">
          47 <span>sales</span>
        </p>
      </div>
      <hr />

      <div className="products__box">
        <div className="products__box--left">
          <div className="products__box--left-title">
            <p className="name">Dashboard</p>
            <p className="email">Tailwind React</p>
          </div>
        </div>
        <p className="products__box--right">
          43 <span>sales</span>
        </p>
      </div>
      <hr />

      <div className="products__box">
        <div className="products__box--left">
          <div className="products__box--left-title">
            <p className="name">Glassmorphism UI</p>
            <p className="email">TVue Js, Tailwind</p>
          </div>
        </div>
        <p className="products__box--right">
          38 <span>sales</span>
        </p>
      </div>
      <hr />

      <div className="products__box">
        <div className="products__box--left">
          <div className="products__box--left-title">
            <p className="name">Multipurpose Template</p>
            <p className="email">React & Bootstrap Framework"</p>
          </div>
        </div>
        <p className="products__box--right">
          22 <span>sales</span>
        </p>
      </div>
      <hr />
    </div>
  );
};

export default Products;
