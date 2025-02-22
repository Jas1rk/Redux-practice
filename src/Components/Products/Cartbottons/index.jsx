import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import AfterCart from "./AfterCart";
import BeforeCart from "./BeforeCart";

const CartButtons = ({ product }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const cartCount = useMemo(() => {
    return cartItems?.find((item) => item?.id == product?.id)?.count;
  }, [cartItems]);

  return (
    <>
      {cartCount > 0 ? (
        <AfterCart productid={product?.id} cartCount={cartCount} />
      ) : (
        <BeforeCart product={product} />
      )}
    </>
  );
};

export default CartButtons;
