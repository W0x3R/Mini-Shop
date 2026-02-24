import clsx from "clsx";
import { Text } from "@shared/ui";
import { selectCartItemsCount } from "@features/cart/store";
import { useSelector } from "react-redux";
import * as styles from "./CartHeading.module.css";
import { useEffect, useState } from "react";

export const CartHeading = () => {
  const productsCount = useSelector(selectCartItemsCount);

  const [animate, setAnimate] = useState(false);

  const handleAnimationEnd = () => {
    setAnimate(false);
  };

  useEffect(() => {
    setAnimate(true);
  }, [productsCount]);

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
