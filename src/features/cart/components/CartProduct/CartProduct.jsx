import { useDispatch } from "react-redux";
import * as styles from "./CartProduct.module.css";
import { Text, Button } from "@shared/ui";
import { incrementQuantity, decrementQuantity } from "@features/cart/store";
import { useCurrentUser } from "@features/auth/hooks";
import trashLogo from "@assets/images/trashLogo.svg?url";
import clsx from "clsx";
import { notifySuccess } from "../../../../shared/lib";
import { useCartChangesAnimation } from "@features/cart/hooks";

export const CartProduct = ({ userProduct, quantity }) => {
  const { id, title, thumbnail, price, shippingInformation } = userProduct;

  const dispatch = useDispatch();
  const currentUser = useCurrentUser();
  const userId = currentUser?.id;
  const totalPrice = Number(price * quantity).toFixed(2);
  const { animate, handleAnimationEnd } = useCartChangesAnimation(totalPrice);

  const productPayload = { userId, productId: id };

  const handleIncrement = () => {
    dispatch(incrementQuantity(productPayload));
    notifySuccess("Product added to cart");
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(productPayload));
    notifySuccess("Product removed from cart");
  };

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
        <Text className={styles.title} variant="h2">
          {title}
        </Text>
        <Text className={styles.delivery} variant="p">
          {shippingInformation}
        </Text>
        <Button
          className={styles["delete-product-btn"]}
          title="Delete product from cart"
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
        ></Button>
        <Text
          className={clsx(styles.count, animate && styles.bump)}
          onAnimationEnd={handleAnimationEnd}
          variant="p"
        >
          {quantity}
        </Text>
        <Button
          className={styles["increment-btn"]}
          onClick={handleIncrement}
        ></Button>
      </div>
      <Text
        className={clsx(styles.price, animate && styles.bump)}
        onAnimationEnd={handleAnimationEnd}
        variant="p"
      >{`${totalPrice} $`}</Text>
    </article>
  );
};
