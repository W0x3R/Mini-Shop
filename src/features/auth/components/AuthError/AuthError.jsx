import * as styles from "./AuthError.module.css";
import { Error } from "@shared/ui";

export const AuthError = ({ children }) => {
  return <Error className={styles["auth-error"]}>{children}</Error>;
};
