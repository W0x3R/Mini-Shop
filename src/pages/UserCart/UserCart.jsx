import * as styles from "./UserCart.module.css";
import { Container } from "@shared/ui";
import {
  CartProducts,
  CartTotalPrice,
  CartHeading,
} from "@features/cart/components";

export const UserCart = () => {
  return (
    <section className={styles["user-cart"]}>
      <Container className={styles.wrapper}>
        <CartHeading />
        <CartProducts />
        <CartTotalPrice />
      </Container>
    </section>
  );
};
