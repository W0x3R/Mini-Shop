import { Button } from "@shared/ui/Button";
import clsx from "clsx";

import * as styles from "./Burger.module.css";

export const Burger = ({ onClick, isBurgerOpen }) => {
  return (
    <Button
      className={clsx(styles.burger, isBurgerOpen && styles.open)}
      onClick={onClick}
    >
      <span className={styles["burger-line"]}></span>
      <span className={styles["burger-line"]}></span>
      <span className={styles["burger-line"]}></span>
    </Button>
  );
};
