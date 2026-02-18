import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import * as styles from "./AuthUser.module.css";
import logo from "@assets/images/logo.jpg";
import { useRegisterUserMutation } from "@app/api";
import { addUser, login } from "@features/auth";
import { Container } from "@components/container";
import {
  validateLoginUser,
  validateRegisterUser,
} from "@utils/registerValidation";

export const AuthUser = ({ mode }) => {
  const [localError, setLocalError] = useState(null);
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.auth.users);

  const isLogin = mode === "login";
  const handleRegister = async (formData) => {
    const errorMessage = validateRegisterUser(formData, users);
    if (errorMessage) {
      setLocalError(errorMessage);
      return;
    }

    try {
      const createdUser = await registerUser({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      }).unwrap();

      const newUser = {
        id: createdUser.id,
        username: createdUser.username,
        email: createdUser.email,
        password: createdUser.password,
      };

      dispatch(addUser(newUser));
      navigate("/login");
    } catch (error) {
      setLocalError("Something went wrong");
    }
  };

  const handleLogin = (formData) => {
    const result = validateLoginUser(formData, users);
    if (!result.success) {
      setLocalError(result.error);
      return;
    }
    const currentUser = {
      id: result.user.id,
      username: result.user.username,
      email: result.user.email,
    };
    dispatch(login(currentUser));
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null);

    const formData = Object.fromEntries(new FormData(e.currentTarget));

    if (isLogin) {
      handleLogin(formData);
    } else {
      await handleRegister(formData);
    }
  };

  return (
    <section className={styles.auth}>
      <Container className={styles.wrapper}>
        <img className={styles.logo} width={55} height={55} src={logo} alt="" />
        <h1 className={styles.title}>{isLogin ? "Login" : "Registration"}</h1>
        <form key={mode} className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="user-name">
            Username
          </label>
          <input
            id="user-name"
            className={styles.input}
            type="text"
            name="username"
            autoComplete="on"
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
                autoComplete="on"
                required
              />
            </>
          )}
          <label htmlFor="user-password" className={styles.label}>
            Password
          </label>
          <input
            id="user-password"
            className={styles.input}
            type="password"
            name="password"
            autoComplete="on"
            required
          />
          {!isLogin && (
            <>
              <label htmlFor="user-current-password" className={styles.label}>
                Confirm password
              </label>
              <input
                id="user-current-password"
                className={styles.input}
                type="password"
                name="current_password"
                autoComplete="on"
                required
              />
            </>
          )}
          {localError && <p className={styles.error}>{localError}</p>}
          <button
            className={styles["submit-btn"]}
            type="submit"
            disabled={isLoading}
          >
            {isLogin ? "Login" : isLoading ? "Loading..." : "Register"}
          </button>
        </form>
        <Link
          className={styles["change-mod-link"]}
          to={isLogin ? "/register" : "/login"}
        >
          {isLogin ? "Don't have an account?" : "Already registered?"}
        </Link>
      </Container>
    </section>
  );
};
