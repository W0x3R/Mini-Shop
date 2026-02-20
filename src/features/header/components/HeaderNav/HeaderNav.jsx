import { NavLink } from "react-router";
import * as styles from "./HeaderNav.module.css";

export const HeaderNav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <NavLink className={styles["list-link"]} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={styles["list-link"]} to="/products">
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
