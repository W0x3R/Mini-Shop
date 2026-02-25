import { CartHeading } from "@features/cart/components/CartHeading";
import { CartProducts } from "@features/cart/components/CartProducts";
import { CartTotalPrice } from "@features/cart/components/CartTotalPrice";
import { Wrapper } from "@shared/ui/Wrapper";

import * as styles from "./UserCartPage.module.css";

export default function UserCartPage() {
  return (
    <section className={styles["user-cart"]}>
      <Wrapper className={styles.wrapper}>
        <CartHeading />
        <CartProducts />
        <CartTotalPrice />
      </Wrapper>
    </section>
  );
}
