import { useSelector } from "react-redux";
import clsx from "clsx";
import * as styles from "./CartHeading.module.css";
import { selectCartItemsCount } from "@features/cart/store";
import { Text, Link } from "@shared/ui";
import { useCartChangesAnimation } from "@features/cart/hooks";

export const CartHeading = () => {
  const productsCount = useSelector(selectCartItemsCount);

  const { animate, handleAnimationEnd } =
    useCartChangesAnimation(productsCount);

  const countVariant = productsCount > 1 ? "items" : "item";
  return (
    <>
      <Text className={styles.title} variant="h1">
        Shopping Cart
      </Text>
      <Text
        className={clsx(styles.count, animate && styles.bump)}
        variant="p"
        onAnimationEnd={handleAnimationEnd}
      >
        {`${productsCount} ${countVariant}`}
      </Text>
      {!productsCount && (
        <div className={styles["cart-empty-wrapper"]}>
          <Text className={styles["cart-empty-message"]}>
            You haven't added any products yet.
          </Text>
          <Link className={styles["cart-empty-link"]} href="/products">
            Start adding some products!
          </Link>
        </div>
      )}
    </>
  );
};
