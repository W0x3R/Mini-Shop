import { useSelector } from "react-redux";
import { CartProduct } from "@features/cart/components";
import { selectCurrentUserCartItems } from "@features/cart/store";

export const CartProducts = () => {
  const currentUserProducts = useSelector(selectCurrentUserCartItems);

  return currentUserProducts.map(({ product, quantity }) => {
    return (
      <CartProduct key={product.id} userProduct={product} quantity={quantity} />
    );
  });
};
