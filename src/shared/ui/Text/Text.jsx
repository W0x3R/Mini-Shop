import clsx from "clsx";

import * as styles from "./Text.module.css";

export const Text = ({ children, className, tag = "p", variant, ...props }) => {
  const Tag = tag;
  return (
    <Tag className={clsx(styles[variant], className)} {...props}>
      {children}
    </Tag>
  );
};
