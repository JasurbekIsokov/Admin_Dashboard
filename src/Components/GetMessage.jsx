import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const GetMessage = () => {
  const [messages, getMessage] = useState([]);
  const [readMessages, getReadMessage] = useState([]);
  const [id, setId] = useState(null);
  const [readMessage, setReadMessage] = useState([]);

  // Habarlarni olib kelish
  const getMessages = async () => {
    try {
      axios.get("http://localhost:3004/message").then((responce) => {
        getMessage(responce.data.reverse());
      });
    } catch (error) {
      console.log(error.message);
      toast.error("There is an error fetching messages");
    }
  };

  // o'qilgan habarlarga qo'shish
  const postReadMessage = async (id) => {
    try {
      axios.get(`http://localhost:3004/message/${id}`).then((responce) => {
        try {
          axios
            .post("http://localhost:3004/readMessage", responce.data)
            .then((responce) => {
              getReadMessages();
              toast.success("Added to read messages");
            });
        } catch (error) {
          console.log(error.message);
          toast.error("There was an error adding the messages");
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  // o'qilgan habarlarni olib kelish
  const getReadMessages = async () => {
    try {
      axios.get("http://localhost:3004/readMessage").then((responce) => {
        getReadMessage(responce.data.reverse());
      });
    } catch (error) {
      console.log(error.message);
      toast.error("There is an error fetching messages");
    }
  };

  //habarlarni o'chirish
  const deleteMessage = async (id) => {
    try {
      axios.delete(`http://localhost:3004/message/${id}`).then((responce) => {
        getMessages();
        toast.success("Message deleted");
      });
    } catch (error) {
      console.log(error.message);
      toast.error("There was an error deleting the message");
    }
  };

  //o'qilgan habarlarni o'chirish
  const deleteReadMessage = async (id) => {
    try {
      axios
        .delete(`http://localhost:3004/readMessage/${id}`)
        .then((responce) => {
          getReadMessages();
          toast.success("Message deleted");
        });
    } catch (error) {
      console.log(error.message);
      toast.error("There was an error deleting the message");
    }
  };

  useEffect(() => {
    getMessages();
    getReadMessages();
  }, []);

  // habarlardan o'chirish
  const onClick = (id) => {
    deleteMessage(id);
  };

  // o'qilgan habarlardan o'chirish
  const readingOnClick = (id) => {
    deleteReadMessage(id);
  };

  // o'qilgan habarlarga qo'shish
  const readOnClick = (id) => {
    postReadMessage(id);
    try {
      axios.delete(`http://localhost:3004/message/${id}`).then((responce) => {
        getMessages();
      });
    } catch (error) {
      console.log(error.message);
      toast.error("There was an error deleting the message");
    }
  };

  return (
    <div className="messagePage__section">
      <div className="getMessage">
        <p className="getMessage__title">New Messages</p>
        {messages.length === 0 ? (
          <p className="getMessage__pustoyTitle ">No messages</p>
        ) : (
          messages.map((message) => {
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
                    <button
                      value={id}
                      onClick={(e) => onClick(e.target.value)}
                      className="delete"
                    >
                      Delete
                    </button>
                    <button
                      className="noDelete"
                      value={id}
                      onClick={(e) => readOnClick(e.target.value)}
                    >
                      Add to read
                    </button>
                  </div>
                </div>
                <hr />
              </>
            );
          })
        )}
      </div>

      <div className="getReadMessage">
        <p className="getReadMessage__title">List of read messages</p>
        {readMessages.length === 0 ? (
          <p className="getReadMessage__pustoyTitle">
            There are no messages in the read list
          </p>
        ) : (
          readMessages.map((message) => {
            const { id, name, phoneNumber, description, date } = message;

            return (
              <>
                <div className="getReadMessage__box" key={id}>
                  <p className="getReadMessage__box--name">
                    Name: <span>{`${name}`}</span>
                  </p>

                  <div className="getReadMessage__box--head">
                    <p className="getReadMessage__box--head-number">
                      Phone Number: <span> {`${phoneNumber}`}</span>
                    </p>
                    <p className="getReadMessage__box--head-date">
                      Date: <span>{`${date}`}</span>
                    </p>
                  </div>

                  <p className="getReadMessage__box--des">{`${description}`}</p>
                  <div className="getReadMessage__box--bottom">
                    <button
                      value={id}
                      onClick={(e) => readingOnClick(e.target.value)}
                      className="delete"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <hr />
              </>
            );
          })
        )}
      </div>
    </div>
  );
};

export default GetMessage;
