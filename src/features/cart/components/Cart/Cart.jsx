import { useSelector } from "react-redux";
import clsx from "clsx";
import cartLogo from "@assets/images/cart.svg?url";
import * as styles from "./Cart.module.css";
import { Link } from "@shared/ui";
import { selectCartItemsCount } from "@features/cart/store";
import { useCartChangesAnimation } from "@features/cart/hooks";

export const Cart = () => {
  const productsCount = useSelector(selectCartItemsCount);

  const { animate, handleAnimationEnd } =
    useCartChangesAnimation(productsCount);

  return (
    <div className={styles["cart-wrapper"]}>
      <Link className={styles["cart-link"]} to="/cart">
        <img src={cartLogo} width={30} height={30} alt="Open user cart" />
      </Link>
      <span
        onAnimationEnd={handleAnimationEnd}
        className={clsx(styles["cart-count"], animate && styles.bump)}
      >
        {productsCount}
      </span>
    </div>
  );
};
