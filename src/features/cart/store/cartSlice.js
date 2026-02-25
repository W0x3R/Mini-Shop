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
    incrementQuantity: (state, action) => {
      const { userId, productId } = action.payload;

      const item = state.carts[userId]?.items.find(
        (item) => item.product.id === productId,
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const { userId, productId } = action.payload;

      const cart = state.carts[userId];
      if (!cart) return;
      const item = cart.items.find((item) => item.product.id === productId);
      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        cart.items = cart.items.filter((item) => item.product.id !== productId);
      }
    },
    removeFromCart: (state, action) => {
      const { userId, productId } = action.payload;

      let cart = state.carts[userId];
      cart.items = cart.items.filter((item) => item.product.id !== productId);
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
