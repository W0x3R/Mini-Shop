import { Link } from "@shared/ui/Link";
import { Text } from "@shared/ui/Text";
import clsx from "clsx";

import * as styles from "./ProfileDropdown.module.css";

export const ProfileDropdown = ({ isOpen, username, email, onLogout }) => {
  return (
    <div
      className={clsx(styles["profile-dropdown"], isOpen ? styles.show : "")}
    >
      <div className={styles["profile-dropdown-info"]}>
        <Text
          className={styles["profile-dropdown-username"]}
          tag="p"
          variant="small-text"
        >
          {username}
        </Text>
        <Text
          className={styles["profile-dropdown-email"]}
          tag="p"
          variant="small-text"
        >
          {email}
        </Text>
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
