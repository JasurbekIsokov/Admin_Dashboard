import React, { useState, useEffect } from "react";
import axios from "axios";

const GetMessage = () => {
  const [messages, getMessage] = useState([]);

  const getMessages = async () => {
    try {
      axios.get("http://localhost:3004/message").then((responce) => {
        getMessage(responce.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div className="getMessage">
      <p className="getMessage__title">Message</p>

      {messages.map((message) => {
        const { id, name, phoneNumber, description, date } = message;

        return (
          <>
            <div className="getMessage__box" key={id}>
              <p className="getMessage__box--name">
                Name: <span>{`${name}`}</span>
              </p>
              <div className="getMessage__box--head">
                <p className="getMessage__box--head-number">
                  Phone Number: <span> {`${phoneNumber}`}</span>
                </p>
                <p className="getMessage__box--head-date">
                  Date: <span>{`${date}`}</span>
                </p>
              </div>

              <p className="getMessage__box--des">{`${description}`}</p>
              <div className="getMessage__box--bottom">
                <button className="delete">Delete</button>
                <button className="noDelete">O'qilganga qo'shish</button>
              </div>
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
};

export default GetMessage;
