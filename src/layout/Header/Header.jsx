import { Link, NavLink } from "react-router";
import * as styles from "./Header.module.css";
import cartLogo from "@assets/images/cart.svg";
import { Container } from "@shared/ui/Сontainer";
import { Profile } from "@features/profile/components";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={`${styles.wrapper} container`}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li>
              <NavLink className={styles["list-link"]} to="/products">
                Products
              </NavLink>
            </li>
          </ul>
          <div className={styles["cart-wrapper"]}>
            <Link to="/cart">
              <img src={cartLogo} width={30} height={30} />
            </Link>
            <span className={styles["cart-count"]}>0</span>
          </div>
          <Profile />
        </nav>
      </Container>
    </header>
  );
};
