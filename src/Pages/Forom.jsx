import React, { useState, useRef } from "react";
import axios from "axios";

const Forom = () => {
  const [message, setMessage] = useState([]);

  const formRef = useRef(null);
  const nameInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const returnTiem = () => {
    let date = new Date().getTime();
    return date;
  };

  const returDate = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let vaqt = `${hours}:${minutes}:${seconds} - ${day}/${month}/${year}`;

    return vaqt;
  };

  const submitForm = (e) => {
    e.preventDefault();
    postMessgae();
  };

  const postMessgae = async () => {
    let messageBaza = {
      id: returnTiem(),
      name: nameInputRef.current.value,
      phoneNumber: phoneInputRef.current.value,
      description: messageInputRef.current.value,
      date: returDate(),
    };

    try {
      axios
        .post("http://localhost:3004/message", messageBaza)
        .then((responce) => {
          setMessage(responce);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={submitForm} ref={formRef}>
        <div className="inputs">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            ref={nameInputRef}
          />
          <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Phone number"
            ref={phoneInputRef}
          />
        </div>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          ref={messageInputRef}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forom;
