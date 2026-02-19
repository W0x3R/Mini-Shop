import { clsx } from "clsx";
import * as styles from "./Error.module.css";

export const Error = ({ children, className, ...props }) => {
  return (
    <div className={clsx(styles.error, className)} {...props}>
      {children}
    </div>
  );
};
