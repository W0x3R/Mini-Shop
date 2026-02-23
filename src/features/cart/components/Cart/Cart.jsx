import cartLogo from "@assets/images/cart.svg?url";
import * as styles from "./Cart.module.css";
import { Link } from "@shared/ui/Link";
import { useSelector } from "react-redux";
import { selectCartItemsCount } from "@features/cart/store";

export const Cart = () => {
  const productsCount = useSelector(selectCartItemsCount);
  return (
    <div className={styles["cart-wrapper"]}>
      <Link to="/cart">
        <img src={cartLogo} width={30} height={30} />
      </Link>
      <span className={styles["cart-count"]}>{productsCount}</span>
    </div>
  );
};
