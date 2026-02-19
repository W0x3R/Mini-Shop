import * as styles from "./AuthLink.module.css";
import { Link } from "@shared/link";

export const AuthLink = ({ children, href }) => {
  return (
    <Link href={href} className={styles["auth-link"]}>
      {children}
    </Link>
  );
};
