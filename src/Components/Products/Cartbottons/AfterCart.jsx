import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../../redux/Cart";
import "./Cartbtn.css";

const AfterCart = () => {
  const dispatch = useDispatch();
  return (
    <div className="after-cart">
      <button
        className="cart-counter-btn"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <div className="cart-count">1</div>
      <button
        className="cart-counter-btn"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </div>
  );
};

export default AfterCart;
