import clsx from "clsx";
import * as styles from "./Container.module.css";

export const Container = ({ className, children }) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};
