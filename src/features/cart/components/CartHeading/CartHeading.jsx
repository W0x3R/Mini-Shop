import { useCartChangesAnimation } from "@features/cart/hooks";
import { selectCartItemsCount } from "@features/cart/store";
import { Link } from "@shared/ui/Link";
import { Text } from "@shared/ui/Text";
import clsx from "clsx";
import { useSelector } from "react-redux";

import * as styles from "./CartHeading.module.css";

export const CartHeading = () => {
  const productsCount = useSelector(selectCartItemsCount);

  const { animate, handleAnimationEnd } =
    useCartChangesAnimation(productsCount);

  const countVariant = productsCount > 1 ? "items" : "item";
  return (
    <>
      <Text className={styles.title} tag="h1" variant="small">
        Shopping Cart
      </Text>
      <Text
        className={clsx(styles.count, animate && styles.bump)}
        tag="p"
        variant="small-text"
        onAnimationEnd={handleAnimationEnd}
      >
        {`${productsCount} ${countVariant}`}
      </Text>
      {!productsCount && (
        <div className={styles["cart-empty-wrapper"]}>
          <Text
            className={styles["cart-empty-message"]}
            tag="p"
            variant="basic-text"
          >
            You haven&apos;t added any products yet.
          </Text>
          <Link className={styles["cart-empty-link"]} href="/products">
            Start adding some products!
          </Link>
        </div>
      )}
    </>
  );
};
