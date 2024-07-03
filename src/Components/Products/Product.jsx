import React, { useState } from "react";
import products from "../../api/products.json";
import BeforeCart from "./Cartbottons/BeforeCart";
import AfterCart from "./Cartbottons/AfterCart";
import { useSelector } from "react-redux";
import "./Products.css";

const Product = () => {
  const { cartCount } = useSelector((state) => state.cart);
  console.log("This is cartcount", cartCount);
  return (
    <>
      <section className="container">
        {products.map((product, index) => (
          <>
            <div className="product-container" key={index}>
              <img src={product.image} alt="" />
              <h3>{product.title}</h3>

              {cartCount > 0 ? <AfterCart /> : <BeforeCart />}
            </div>
          </>
        ))}
      </section>
    </>
  );
};

export default Product;
