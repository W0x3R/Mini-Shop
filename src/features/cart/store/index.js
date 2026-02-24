import cartReducer, {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "./cartSlice";

export { addToCart, incrementQuantity, decrementQuantity };
export default cartReducer;
export {
  selectCurrentUserCartItems,
  selectCartItemsCount,
  selectCartTotalPrice,
} from "./selectors";
