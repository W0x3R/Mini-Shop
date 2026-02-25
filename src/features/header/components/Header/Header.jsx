import { Cart } from "@features/cart/components/Cart";
import { HeaderNav } from "@features/header/components/HeaderNav";
import { Profile } from "@features/profile/components/Profile";
import { Wrapper } from "@shared/ui/Wrapper";
import clsx from "clsx";

import * as styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper className={clsx(styles.wrapper, "container")}>
        <HeaderNav />
        <Cart />
        <Profile />
      </Wrapper>
    </header>
  );
};
