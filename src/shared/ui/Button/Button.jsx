import { clsx } from "clsx";

import * as styles from "./Button.module.css";

export const Button = ({
  children,
  className,
  type = "button",
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={clsx(styles.button, className)}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
