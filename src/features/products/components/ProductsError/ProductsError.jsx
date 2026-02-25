import errorImg from "@assets/images/error.svg?url";
import { Error } from "@shared/ui/Error";

import * as styles from "./ProductsError.module.css";

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
