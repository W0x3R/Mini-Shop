import clsx from "clsx";

import * as styles from "./Text.module.css";

export const Text = ({ children, className, variant = "p", ...props }) => {
  const Tag = variant;
  return (
    <Tag className={clsx(styles[variant], className)} {...props}>
      {children}
    </Tag>
  );
};
