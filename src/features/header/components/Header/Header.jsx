import clsx from "clsx";
import * as styles from "./Header.module.css";
import { Container } from "@shared/ui";
import { Profile } from "@features/profile/components";
import { Cart } from "@features/cart/components";
import { HeaderNav } from "@features/header/components";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={clsx(styles.wrapper, "container")}>
        <HeaderNav />
        <Cart />
        <Profile />
      </Container>
    </header>
  );
};
