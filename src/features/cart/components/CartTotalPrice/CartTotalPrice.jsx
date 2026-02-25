import { useCartChangesAnimation } from "@features/cart/hooks";
import { selectCartTotalPrice } from "@features/cart/store";
import { Text } from "@shared/ui/Text";
import clsx from "clsx";
import { useSelector } from "react-redux";

import * as styles from "./CartTotalPrice.module.css";

export const CartTotalPrice = () => {
  const productsTotalPrice = useSelector(selectCartTotalPrice);
  const normalizedProductsTotalPrice = Number(productsTotalPrice.toFixed(2));
  const { animate, handleAnimationEnd } =
    useCartChangesAnimation(productsTotalPrice);

  if (!productsTotalPrice) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <Text className={styles.title} variant="h3">
        Total Price:
      </Text>
      <Text
        className={clsx(styles["total-price"], animate && styles.bump)}
        variant="p"
        onAnimationEnd={handleAnimationEnd}
      >
        {normalizedProductsTotalPrice} $
      </Text>
    </div>
  );
};
