import clsx from "clsx";
import cartLogo from "@assets/images/cart.svg?url";
import * as styles from "./Cart.module.css";
import { Link } from "@shared/ui/Link";
import { useSelector } from "react-redux";
import { selectCartItemsCount } from "@features/cart/store";
import { useEffect, useState } from "react";

export const Cart = () => {
  const [animate, setAnimate] = useState(false);

  const productsCount = useSelector(selectCartItemsCount);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 250);
    return () => clearTimeout(timer);
  }, [productsCount]);

  return (
    <div className={styles["cart-wrapper"]}>
      <Link to="/cart">
        <img src={cartLogo} width={30} height={30} />
      </Link>
      <span className={clsx(styles["cart-count"], animate && styles.bump)}>
        {productsCount}
      </span>
    </div>
  );
};
