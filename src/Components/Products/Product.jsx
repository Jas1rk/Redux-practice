import React from "react";
import products from "../../api/products.json";
import CartButtons from "./Cartbottons";
import { useSelector } from "react-redux";
import "./Products.css";

const Product = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <>
      <section className="container">
        {products?.map((product, id) => (
          <>
            <div className="product-container" key={id}>
              <img src={product?.image} alt="" />
              <h3>{product?.title}</h3>
              <CartButtons product={product} />
            </div>
          </>
        ))}
      </section>
    </>
  );
};

export default Product;
