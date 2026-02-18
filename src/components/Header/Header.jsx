import { Link, NavLink } from "react-router";
import * as styles from "./Header.module.css";
import profileLogo from "/src/assets/images/profile-arrow.svg";
import cartLogo from "/src/assets/images/cart.svg";
import { useEffect, useRef, useState } from "react";

export const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const modalRef = useRef(null);

  const handleProfileClick = () => {
    setIsProfileOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target) &&
        !modalRef.current.contains(event.target)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={`${styles.wrapper} container`}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li>
              <NavLink className={styles["list-link"]} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className={styles["list-link"]} to="/shop">
                Shop
              </NavLink>
            </li>
          </ul>
          <div className={styles["cart-wrapper"]}>
            <Link to="/cart">
              <img
                className={styles.logo}
                src={cartLogo}
                width={30}
                height={30}
              />
            </Link>
            <span className={styles["cart-count"]}>0</span>
          </div>
          <div
            className={styles["profile-wrapper"]}
            onClick={handleProfileClick}
            ref={profileRef}
          >
            <button className={styles["profile-btn"]}>
              <img
                className={styles.logo}
                src="https://placehold.co/40x40?&font=oswald&text=SV"
                width={40}
                height={40}
              />
              <span
                className={`${styles["profile-arrow"]} ${isProfileOpen ? styles.open : ""}`}
              >
                <img src={profileLogo} alt="" width={12} height={12} />
              </span>
            </button>
          </div>
        </nav>
        <div
          ref={modalRef}
          className={`${styles["profile-dropdown"]} ${isProfileOpen ? styles.show : ""}`}
        >
          <div className={styles["profile-dropdown-info"]}>
            <p className={styles["profile-dropdown-username"]}>Stanislau</p>
            <p className={styles["profile-dropdown-email"]}>
              vyr4376@yandex.ru
            </p>
          </div>
          <Link
            onClick={handleProfileClick}
            to="/register"
            className={styles["profile-dropdown-logout"]}
          >
            Logout
          </Link>
        </div>
      </div>
    </header>
  );
};
