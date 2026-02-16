import { Link } from "react-router";
import * as styles from "./AuthUser.module.css";
import logo from "/src/assets/images/logo.jpg";

export const AuthUser = ({ mode }) => {
  const isLogin = mode === "login";
  return (
    <section className={styles.auth}>
      <div className={`${styles.wrapper} container`}>
        <img className={styles.logo} width={55} height={55} src={logo} alt="" />
        <h1 className={styles.title}>{isLogin ? "Login" : "Registration"}</h1>
        <form className={styles.form}>
          <label className={styles.label} htmlFor="user-name">
            Username
          </label>
          <input
            id="user-name"
            className={styles.input}
            type="text"
            name="username"
            autoComplete="username"
            required
          />
          {!isLogin && (
            <>
              <label className={styles.label} htmlFor="user-email">
                Email
              </label>
              <input
                id="user-email"
                className={styles.input}
                type="email"
                name="email"
                autoComplete="email"
                required
              />
            </>
          )}
          <label htmlFor="user-password" className={styles.label}>
            {" "}
            Password
          </label>
          <input
            id="user-password"
            className={styles.input}
            type="password"
            name="password"
            autoComplete="current-password"
            required
          />
          {!isLogin && (
            <>
              <label htmlFor="user-confirm-password" className={styles.label}>
                {" "}
                Confirm password
              </label>
              <input
                id="user-confirm-password"
                className={styles.input}
                type="password"
                name="confirm_password"
                autoComplete="new-password"
                required
              />
            </>
          )}
          <button className={styles["submit-btn"]} type="submit">
            {isLogin ? "Sign in" : "Create account"}
          </button>
        </form>
        <Link
          className={styles["change-mod-link"]}
          to={isLogin ? "/register" : "/login"}
        >
          {isLogin ? "Don't have an account?" : "Already registered?"}
        </Link>
      </div>
    </section>
  );
};
