import clsx from "clsx";
import logo from "@assets/images/logo.jpg";
import * as styles from "./Logo.module.css";

export const Logo = ({ size, className }) => {
  return (
    <img
      src={logo}
      className={clsx(styles.logo, className)}
      width={size}
      height={size}
      alt="logo"
    />
  );
};
