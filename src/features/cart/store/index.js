import cartReducer, {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "./cartSlice";

export { addToCart, decrementQuantity, incrementQuantity, removeFromCart };
export default cartReducer;
export {
  selectCartItemsCount,
  selectCartTotalPrice,
  selectCurrentUserCartItems,
} from "./selectors";
