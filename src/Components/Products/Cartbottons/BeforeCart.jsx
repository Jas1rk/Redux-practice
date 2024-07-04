import React from "react";
import "./Cartbtn.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/Cart";

const BeforeCart = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="before-cart">
      <button
        className="add-cart-btn"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to cart
      </button>
    </div>
  );
};

export default BeforeCart;
