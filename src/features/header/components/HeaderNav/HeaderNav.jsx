import clsx from "clsx";
import { NavLink } from "react-router";

import * as styles from "./HeaderNav.module.css";

export const HeaderNav = ({ isBurgerOpen, onClick }) => {
  return (
    <nav className={clsx(styles.nav, isBurgerOpen && styles.open)}>
      <ul className={clsx(styles.list, isBurgerOpen && styles.open)}>
        <li>
          <NavLink
            onClick={onClick}
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
            onClick={onClick}
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
