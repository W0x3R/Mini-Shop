import * as styles from "./Spinner.module.css";
import SpinnerLogo from "@assets/images/spinner.svg?react";

export const Spinner = ({ size }) => {
  return <SpinnerLogo className={styles.spinner} width={size} height={size} />;
};
