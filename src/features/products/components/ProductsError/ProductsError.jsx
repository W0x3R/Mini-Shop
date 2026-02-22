import errorImg from "@assets/images/error.svg?url";
import * as styles from "./ProductsError.module.css";
import { Error } from "@shared/ui";

export const ProductsError = () => {
  return (
    <>
      <Error className={styles.error}>
        <p>Unable to load products</p>
        <p>Please try again.</p>
      </Error>
      <img
        width={150}
        height={150}
        className={styles["error-img"]}
        src={errorImg}
        alt="Error image"
      />
    </>
  );
};
