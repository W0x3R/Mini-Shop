import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as styles from "./CartTotalPrice.module.css";
import { selectCartTotalPrice } from "@features/cart/store";
import { Text } from "@shared/ui";
import clsx from "clsx";

export const CartTotalPrice = () => {
  const productsTotalPrice = useSelector(selectCartTotalPrice);
  const normalizedProductsTotalPrice = Number(productsTotalPrice.toFixed(2));
  const [animate, setAnimate] = useState(false);

  const handleAnimationEnd = () => {
    setAnimate(false);
  };

  useEffect(() => {
    setAnimate(true);
  }, [normalizedProductsTotalPrice]);

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
