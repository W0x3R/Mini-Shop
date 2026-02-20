import { NavLink } from "react-router";
import * as styles from "./Header.module.css";
import { Container } from "@shared/ui/Сontainer";
import { Profile } from "@features/profile/components";
import { Cart } from "@features/cart/components/Cart";

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
        </nav>
        <Cart />
        <Profile />
      </Container>
    </header>
  );
};
