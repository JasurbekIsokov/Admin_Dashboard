import React, { useState, useRef } from "react";

const Forom = () => {
  return (
    <div>
      <form className="form">
        <p className="form__title">Contact Us</p>
        <div className="form__name">
          <label htmlFor="name" className="formLabel">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
            required
          />
        </div>
        <div className="form__phone">
          <label htmlFor="phone" className="formLabel">
            Phone:
          </label>
          <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Enter phone number"
            required
          />
        </div>

        <div className="form__comment">
          <label htmlFor="description" className="formLabel">
            Message:
          </label>
          <textarea
            name="description"
            id="description"
            cols="10"
            rows="10"
            required
            placeholder="Your Comment..."
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forom;
