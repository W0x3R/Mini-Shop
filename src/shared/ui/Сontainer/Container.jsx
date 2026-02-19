import * as styles from "./Container.module.css";

export const Container = ({ className, children }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};
