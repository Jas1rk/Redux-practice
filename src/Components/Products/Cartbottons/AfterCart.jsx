import React from "react";
import { useDispatch ,useSelector } from "react-redux";
import { decrement, increment } from "../../../redux/Cart";
import "./Cartbtn.css";

const AfterCart = ({cartCount,productid}) => {
 
  const dispatch = useDispatch();
  
  return (
    <div className="after-cart">
      <button
        className="cart-counter-btn"
        onClick={() => dispatch(decrement(productid))}
      >
        -
      </button>
      <div className="cart-count">{cartCount}</div>
      <button
        className="cart-counter-btn"
        onClick={() => dispatch(increment(productid))}
      >
        +
      </button>
    </div>
  );

};

export default AfterCart;
