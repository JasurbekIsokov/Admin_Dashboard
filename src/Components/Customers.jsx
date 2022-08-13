import React, { useEffect, useState } from "react";
import axios from "axios";

const Customers = () => {
  const [customers, getCustomer] = useState([]);

  const getCustomers = async () => {
    try {
      axios.get("http://localhost:3004/customers").then((responce) => {
        getCustomer(responce.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div className="customers">
      <p className="customers__title">Latest Customers</p>
      {customers.map((customer) => {
        const { id, name, email, img, sum } = customer;

        return (
          <>
            <div className="customers__box">
              <div className="customers__box--left">
                <div className={`customer${id}Image customerImage`}></div>
                <div className="customers__box--left-title">
                  <p className="name">{`${name}`}</p>
                  <p className="email">{`${email}`}</p>
                </div>
              </div>
              <p className="customers__box--right">{`${sum}`}</p>
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
};

export default Customers;
