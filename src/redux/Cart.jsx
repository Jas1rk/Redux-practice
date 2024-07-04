import { createSlice } from "@reduxjs/toolkit";

const INITIAL_State = {
  cartItems: [],
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: INITIAL_State,
  reducers: {
    addToCart: (state, action) => {
      const exist = state.cartItems.find(
        (item) => item?.id === action.payload.id
      );
      if (exist) {
        state.cartItems.forEach((data) => {
          if (data.id === action.payload.id) {
            data.count = 1;
          }
        });
      } else {
        state.cartItems.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    increment: (state, action) => {
      const proid = action.payload;
      state.cartItems.forEach((data) => {
        if (data?.id === proid) {
          data.count++;
        }
      });
    },
    decrement: (state, action) => {
      const proid = action.payload;
      state.cartItems.forEach((data) => {
        if (data?.id === proid) {
          data.count--;
        }
      });
    },
  },
});

export const { addToCart, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
