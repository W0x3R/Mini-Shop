import SpinnerLogo from "@assets/images/spinnerLogo.svg?react";

import * as styles from "./Spinner.module.css";

export const Spinner = ({ size }) => {
  return <SpinnerLogo className={styles.spinner} width={size} height={size} />;
};
