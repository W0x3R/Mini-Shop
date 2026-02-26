import { AuthLink } from "@features/auth/components/AuthLink";
import { FormButton } from "@features/auth/components/FormButton";
import { FormControlError } from "@features/auth/components/FormControlError";
import { FormInput } from "@features/auth/components/FormInput";
import { addUser } from "@features/auth/store";
import { registerSchema } from "@features/auth/utils";
import { useRegisterUserMutation } from "@shared/api";
import { notifySuccess } from "@shared/lib";
import * as formStyles from "@shared/styles/forms.module.css";
import { Form } from "@shared/ui/Form";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { USER_EXISTS } from "../../const";

export const RegisterForm = () => {
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.auth.users);
  const formRef = useRef(null);

  const handleRegisterSubmit = async (formData) => {
    const isUserAlreadyExist = users.find(
      (user) => user.username === formData.username,
    );

    if (isUserAlreadyExist) return { type: USER_EXISTS };
    const createdUser = await registerUser(formData).unwrap();

    const newUser = {
      id: crypto.randomUUID(),
      username: createdUser.username,
      email: createdUser.email,
      password: createdUser.password,
    };

    dispatch(addUser(newUser));
    notifySuccess("Register success");
    navigate("/login");
  };

  const handleFormSubmit = async (data) => {
    const result = await handleRegisterSubmit(data);

    if (result?.type === USER_EXISTS) {
      formRef.current.setError("root", {
        type: "manual",
        message: "User already exists",
      });
    }
  };

  return (
    <Form
      validationSchema={registerSchema}
      onSubmit={handleFormSubmit}
      ref={formRef}
      className={formStyles.form}
    >
      <FormInput labelText="Username" name="username" autocomplete="username" />
      <FormInput
        labelText="Email"
        name="email"
        type="email"
        autocomplete="email"
      />
      <FormInput
        labelText="Password"
        name="password"
        type="password"
        autocomplete="new-password"
      />
      <FormInput
        labelText="Confirm password"
        name="confirm_password"
        type="password"
        autocomplete="new-password"
      />
      <FormControlError errorName="root" />
      <FormButton disabled={isLoading}>
        {isLoading ? "Loading..." : "Register"}
      </FormButton>
      <AuthLink href="/login">{"Already registered?"}</AuthLink>
    </Form>
  );
};
