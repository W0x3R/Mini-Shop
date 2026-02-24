import cartReducer, {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "./cartSlice";

export { addToCart, incrementQuantity, decrementQuantity, removeFromCart };
export default cartReducer;
export {
  selectCurrentUserCartItems,
  selectCartItemsCount,
  selectCartTotalPrice,
} from "./selectors";
