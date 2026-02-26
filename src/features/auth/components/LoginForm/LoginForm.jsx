import { AuthLink } from "@features/auth/components/AuthLink";
import { FormButton } from "@features/auth/components/FormButton";
import { FormControlError } from "@features/auth/components/FormControlError";
import { FormInput } from "@features/auth/components/FormInput";
import { INVALID_CREDENTIALS } from "@features/auth/const";
import { login } from "@features/auth/store";
import { loginSchema } from "@features/auth/utils";
import { notifySuccess } from "@shared/lib";
import * as formStyles from "@shared/styles/forms.module.css";
import { Form } from "@shared/ui/Form";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.auth.users);

  const formRef = useRef(null);

  const handleLoginSubmit = (formData) => {
    const user = users.find(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password,
    );
    if (!user) return { type: INVALID_CREDENTIALS };

    const currentUser = {
      id: user.id,
      username: user.username,
      email: user.email,
    };

    dispatch(login(currentUser));
    notifySuccess("Successfully logged in");
    navigate("/");
  };

  const handleFormSubmit = (data) => {
    const result = handleLoginSubmit(data);

    if (result?.type === INVALID_CREDENTIALS) {
      formRef.current.setError("root", {
        type: "manual",
        message: "Invalid username or password",
      });
    }
  };

  return (
    <Form
      validationSchema={loginSchema}
      onSubmit={handleFormSubmit}
      className={formStyles.form}
      ref={formRef}
    >
      <FormInput labelText="Username" name="username" autocomplete="email" />
      <FormInput
        labelText="Password"
        name="password"
        type="password"
        autocomplete="current-password"
      />
      <FormControlError errorName="root" />
      <FormButton>Login</FormButton>
      <AuthLink href="/register">{"Don't have an account?"}</AuthLink>
    </Form>
  );
};
