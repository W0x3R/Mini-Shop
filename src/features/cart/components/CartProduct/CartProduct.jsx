import trashLogo from "@assets/images/trashLogo.svg?url";
import { useCurrentUser } from "@features/auth/hooks";
import { useCartChangesAnimation } from "@features/cart/hooks";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@features/cart/store";
import { Button } from "@shared/ui/Button";
import { Text } from "@shared/ui/Text";
import clsx from "clsx";
import { useDispatch } from "react-redux";

import * as styles from "./CartProduct.module.css";

export const CartProduct = ({ userProduct, quantity }) => {
  const { id, title, thumbnail, price, shippingInformation } = userProduct;

  const dispatch = useDispatch();
  const currentUser = useCurrentUser();
  const userId = currentUser?.id;
  const totalPrice = Number(price * quantity).toFixed(2);
  const { animate, handleAnimationEnd } = useCartChangesAnimation(totalPrice);

  const productPayload = { userId, productId: id };

  const handleIncrement = () => dispatch(incrementQuantity(productPayload));
  const handleDecrement = () => dispatch(decrementQuantity(productPayload));
  const handleRemoveProduct = () => dispatch(removeFromCart(productPayload));

  return (
    <article className={styles.wrapper}>
      <img
        className={styles.img}
        src={thumbnail}
        alt={title}
        width={150}
        height={150}
        loading="lazy"
      />
      <div className={styles["info-wrapper"]}>
        <Text className={styles.title} tag="h2" variant="small-text">
          {title}
        </Text>
        <Text className={styles.delivery} tag="p" variant="small-text">
          {shippingInformation}
        </Text>
        <Button
          className={styles["delete-product-btn"]}
          title="Delete product from cart"
          onClick={handleRemoveProduct}
        >
          <img
            className={styles["trash-logo"]}
            src={trashLogo}
            alt="Delete product from cart"
          />
        </Button>
      </div>
      <div className={styles["count-wrapper"]}>
        <Button
          className={styles["decrement-btn"]}
          onClick={handleDecrement}
          aria-label="Decrease quantity"
        ></Button>
        <Text
          className={clsx(styles.count, animate && styles.bump)}
          onAnimationEnd={handleAnimationEnd}
          tag="p"
          variant="small-text"
        >
          {quantity}
        </Text>
        <Button
          className={styles["increment-btn"]}
          onClick={handleIncrement}
          aria-label="Increase quantity"
        ></Button>
      </div>
      <Text
        className={clsx(styles.price, animate && styles.bump)}
        onAnimationEnd={handleAnimationEnd}
        tag="p"
        variant="small-text"
      >{`${totalPrice} $`}</Text>
    </article>
  );
};
