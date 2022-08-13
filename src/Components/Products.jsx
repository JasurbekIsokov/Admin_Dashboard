import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, getProduct] = useState([]);

  const getProducts = async () => {
    try {
      axios.get("http://localhost:3004/products").then((responce) => {
        getProduct(responce.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products">
      <p className="products__title">Top products</p>

      {products.map((product) => {
        const { id, title, description, sales } = product;

        return (
          <>
            <div className="products__box">
              <div className="products__box--left">
                <div className="products__box--left-title">
                  <p className="name">{`${title}`}</p>
                  <p className="email">{`${description}`}</p>
                </div>
              </div>
              <p className="products__box--right">
                {`${sales}`} <span>sales</span>
              </p>
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
};

export default Products;
