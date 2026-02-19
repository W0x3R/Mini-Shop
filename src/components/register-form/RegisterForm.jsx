import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema } from "@utils/validation";
import * as formStyles from "@shared/styles/forms.module.css";
import { FormInput } from "@components/form-input";
import { AuthError } from "@components/auth-error";
import { AuthLink } from "@components/auth-link";
import { FormButton } from "@components/form-button";

export const RegisterForm = ({ onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const handleFormSubmit = async (data) => {
    const result = await onSubmit(data);

    if (result?.type === "USER_EXISTS") {
      setError("root", {
        type: "manual",
        message: "User already exists",
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
        labelText="Email"
        name="email"
        type="email"
        register={register}
        error={errors.email}
      />
      <FormInput
        labelText="Password"
        name="password"
        type="password"
        register={register}
        error={errors.password}
      />
      <FormInput
        labelText="Confirm password"
        name="confirm_password"
        type="password"
        register={register}
        error={errors.confirm_password}
      />
      {errors.root && (
        <AuthError>
          <p>{errors.root.message}</p>
        </AuthError>
      )}
      <FormButton disabled={isLoading}>
        {isLoading ? "Loading..." : "Login"}
      </FormButton>
      <AuthLink href="/login">{"Already registered?"}</AuthLink>
    </form>
  );
};
