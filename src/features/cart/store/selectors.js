import { createSelector } from "@reduxjs/toolkit";

const selectCurrentUserId = (state) => state.auth.currentUser?.id;

const selectCarts = (state) => state.cart.carts;

const EMPTY_ARRAY = [];

export const selectCurrentUserCartItems = createSelector(
  [selectCurrentUserId, selectCarts],
  (userId, carts) => {
    if (!userId) return EMPTY_ARRAY;
    return carts[userId]?.items ?? EMPTY_ARRAY;
  },
);

export const selectCartItemsCount = createSelector(
  [selectCurrentUserCartItems],
  (items) => items.reduce((count, item) => count + item.quantity, 0),
);
