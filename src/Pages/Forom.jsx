import React, { useState } from "react";
import axios from "axios";

const Forom = () => {
  const [message, setMessage] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    postMessgae();
  };

  const postMessgae = async () => {
    try {
      axios
        .post("http://localhost:3004/message", {
          name: "salom",
        })
        .then((responce) => {
          setMessage(responce);
          console.log(message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <div className="inputs">
          <input type="text" name="name" id="name" placeholder="name" />
          <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Phone number"
          />
        </div>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forom;
