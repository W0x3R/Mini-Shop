import { useEffect, useRef, useState } from "react";
import * as styles from "./Profile.module.css";
import { ProfileButton, ProfileDropdown } from "@features/profile/components";
import { useCurrentUser, useLogout } from "@features/auth/hooks";
import { notifySuccess } from "@shared/lib";

export const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const { username = "none", email = "none" } = useCurrentUser();
  const logout = useLogout();

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
    notifySuccess("You have successfully logged out");
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (!wrapperRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles["profile-wrapper"]} ref={wrapperRef}>
      <ProfileButton isOpen={isOpen} onClick={toggleOpen} username={username} />
      <ProfileDropdown
        isOpen={isOpen}
        username={username}
        email={email}
        onLogout={handleLogout}
      />
    </div>
  );
};
