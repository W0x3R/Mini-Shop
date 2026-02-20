import cartLogo from "@assets/images/cart.svg";
import * as styles from "./Cart.module.css";
import { Link } from "@shared/ui/Link";

export const Cart = () => {
  return (
    <div className={styles["cart-wrapper"]}>
      <Link to="/cart">
        <img src={cartLogo} width={30} height={30} />
      </Link>
      <span className={styles["cart-count"]}>0</span>
    </div>
  );
};
