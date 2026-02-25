import { Link } from "@shared/ui/Link";
import clsx from "clsx";

import * as styles from "./ProfileDropdown.module.css";

export const ProfileDropdown = ({ isOpen, username, email, onLogout }) => {
  return (
    <div
      className={clsx(styles["profile-dropdown"], isOpen ? styles.show : "")}
    >
      <div className={styles["profile-dropdown-info"]}>
        <p className={styles["profile-dropdown-username"]}>{username}</p>
        <p className={styles["profile-dropdown-email"]}>{email}</p>
      </div>
      <Link
        className={styles["profile-dropdown-logout"]}
        onClick={onLogout}
        href="/login"
        tabIndex={isOpen ? 0 : -1}
      >
        Logout
      </Link>
    </div>
  );
};
