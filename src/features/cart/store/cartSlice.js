import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { userId, product } = action.payload;

      if (!state.carts[userId]) {
        state.carts[userId] = { items: [] };
      }

      let cart = state.carts[userId];

      const existingItem = cart.items.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.items.push({
          product,
          quantity: 1,
        });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
