import clsx from "clsx";
import { Text } from "@shared/ui";
import { selectCartItemsCount } from "@features/cart/store";
import { useSelector } from "react-redux";
import * as styles from "./CartHeading.module.css";
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
    </>
  );
};
