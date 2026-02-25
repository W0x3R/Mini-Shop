import profileArrow from "@assets/images/profile-arrow.svg?url";
import { getAvatarUrl } from "@features/profile/utils";
import { Button } from "@shared/ui/Button";

import * as styles from "./ProfileButton.module.css";

export const ProfileButton = ({ isOpen, onClick, username }) => {
  return (
    <Button className={styles["profile-btn"]} onClick={onClick}>
      <img
        className={styles["profile-logo"]}
        src={getAvatarUrl(username)}
        width={40}
        height={40}
        alt={`${username} avatar`}
      />
      <span
        className={`${styles["profile-arrow"]} ${isOpen ? styles.open : ""}`}
      >
        <img src={profileArrow} alt="" width={12} height={12} />
      </span>
    </Button>
  );
};
