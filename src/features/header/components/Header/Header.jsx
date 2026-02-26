import { Cart } from "@features/cart/components/Cart";
import { Burger } from "@features/header/components/Burger";
import { HeaderNav } from "@features/header/components/HeaderNav";
import { Profile } from "@features/profile/components/Profile";
import { Wrapper } from "@shared/ui/Wrapper";
import clsx from "clsx";
import { useState } from "react";

import * as styles from "./Header.module.css";

export const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleBurgerClick = () => setIsBurgerOpen((prev) => !prev);
  const closeBurger = () => setIsBurgerOpen(false);

  return (
    <header className={styles.header}>
      <Wrapper className={clsx(styles.wrapper, "container")}>
        <Burger onClick={handleBurgerClick} isBurgerOpen={isBurgerOpen} />
        <HeaderNav onClick={closeBurger} isBurgerOpen={isBurgerOpen} />
        <Cart onClick={closeBurger} />
        <Profile />
      </Wrapper>
    </header>
  );
};
