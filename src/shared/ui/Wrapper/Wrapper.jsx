import clsx from "clsx";

import * as styles from "./Wrapper.module.css";

export const Wrapper = ({ className, children }) => {
  return <div className={clsx(styles.wrapper, className)}>{children}</div>;
};
