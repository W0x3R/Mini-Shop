import { clsx } from "clsx";
import { Link as RouterLink } from "react-router";

import * as styles from "./Link.module.css";

export const Link = ({ children, href, className, ...props }) => {
  return (
    <RouterLink className={clsx(styles.link, className)} to={href} {...props}>
      {children}
    </RouterLink>
  );
};
