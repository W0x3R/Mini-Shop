import clsx from "clsx";
import { NavLink } from "react-router";

import * as styles from "./HeaderNav.module.css";

export const HeaderNav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <NavLink
            className={({ isActive }) =>
              clsx(styles["list-link"], isActive && styles.active)
            }
            to="/"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              clsx(styles["list-link"], isActive && styles.active)
            }
            to="/products"
          >
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
