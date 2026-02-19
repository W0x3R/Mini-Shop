import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import * as styles from "./AuthUser.module.css";
import logo from "@assets/images/logo.jpg";
import { useRegisterUserMutation } from "@app/api";
import { addUser, login } from "@features/auth";
import { Container } from "@components/container";
import { LoginForm } from "@components/login-form";
import { RegisterForm } from "@components/register-form";

export const AuthUser = ({ mode }) => {
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.auth.users);
  const isLogin = mode === "login";

  const handleRegisterSubmit = async (formData) => {
    const isUserAlreadyExist = users.find(
      (user) => user.username === formData.username,
    );

    if (isUserAlreadyExist) return { type: "USER_EXISTS" };

    const createdUser = await registerUser(formData).unwrap();

    const newUser = {
      id: createdUser.id,
      username: createdUser.username,
      email: createdUser.email,
      password: createdUser.password,
    };

    dispatch(addUser(newUser));
    navigate("/login");
  };

  const handleLoginSubmit = (formData) => {
    const user = users.find(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password,
    );
    if (!user) return { type: "INVALID_CREDENTIALS" };

    const currentUser = {
      id: user.id,
      username: user.username,
      email: user.email,
    };

    dispatch(login(currentUser));
    navigate("/");
  };

  return (
    <section className={styles.auth}>
      <Container className={styles.wrapper}>
        <img className={styles.logo} width={55} height={55} src={logo} alt="" />
        <h1 className={styles.title}>{isLogin ? "Login" : "Registration"}</h1>
        {isLogin ? (
          <LoginForm onSubmit={handleLoginSubmit} />
        ) : (
          <RegisterForm onSubmit={handleRegisterSubmit} isLoading={isLoading} />
        )}
      </Container>
    </section>
  );
};
