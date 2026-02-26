import { clsx } from "clsx";

import * as styles from "./Error.module.css";

export const Error = ({ children, className, variant, ...props }) => {
  return (
    <div className={clsx(styles.error, styles[variant], className)} {...props}>
      {children}
    </div>
  );
};
