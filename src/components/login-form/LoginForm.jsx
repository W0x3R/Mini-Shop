import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as formStyles from "@shared/styles/forms.module.css";
import { FormInput } from "@components/form-input";
import { loginSchema } from "@utils/validation";
import { AuthError } from "@components/auth-error";
import { AuthLink } from "@components/auth-link";
import { FormButton } from "@components/form-button";

export const LoginForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const handleFormSubmit = async (data) => {
    const result = await onSubmit(data);

    if (result?.type === "INVALID_CREDENTIALS") {
      setError("root", {
        type: "manual",
        message: "Invalid username or password",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={formStyles.form}>
      <FormInput
        labelText="Username"
        name="username"
        register={register}
        error={errors.username}
      />
      <FormInput
        labelText="Password"
        name="password"
        type="password"
        register={register}
        error={errors.password}
      />
      {errors.root && (
        <AuthError>
          <p>{errors.root.message}</p>
        </AuthError>
      )}
      <FormButton>Login</FormButton>
      <AuthLink href="/register">{"Don't have an account?"}</AuthLink>
    </form>
  );
};
