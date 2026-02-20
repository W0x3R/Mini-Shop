import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import * as styles from "./AuthUser.module.css";
import { useRegisterUserMutation } from "@shared/api";
import { addUser, login } from "@features/auth/store";
import { Container, Text, Logo } from "@shared/ui";
import { LoginForm, RegisterForm } from "@features/auth/components";
import { notifySuccess } from "@shared/lib";

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
    notifySuccess("Register success");
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
    notifySuccess("Successfully logged in");
    navigate("/");
  };

  return (
    <section className={styles.auth}>
      <Container className={styles.wrapper}>
        <Logo className={styles["form-logo"]} width={55} height={55} />
        <Text className={styles["form-title"]} variant="h1">
          {isLogin ? "Login" : "Registration"}
        </Text>
        {isLogin ? (
          <LoginForm onSubmit={handleLoginSubmit} />
        ) : (
          <RegisterForm onSubmit={handleRegisterSubmit} isLoading={isLoading} />
        )}
      </Container>
    </section>
  );
};
