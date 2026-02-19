import * as styles from "./FormInput.module.css";
import { AuthError } from "@features/auth/components";

export const FormInput = ({
  labelText,
  name,
  type = "text",
  register,
  error,
}) => {
  return (
    <>
      <label htmlFor={name} className={styles.label}>
        {labelText}
      </label>
      <input
        id={name}
        className={styles.input}
        {...register(name)}
        type={type}
      />
      {error && (
        <AuthError>
          <p>{error.message}</p>
        </AuthError>
      )}
    </>
  );
};
