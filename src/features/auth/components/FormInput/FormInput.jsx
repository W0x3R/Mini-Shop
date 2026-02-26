import { FormControlError } from "@features/auth/components/FormControlError";
import { useId } from "react";
import { useFormContext } from "react-hook-form";

import * as styles from "./FormInput.module.css";

export const FormInput = ({ labelText, name, type = "text", autocomplete }) => {
  const id = useId();
  const { register } = useFormContext();
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {labelText}
      </label>
      <input
        id={id}
        className={styles.input}
        {...register(name)}
        type={type}
        autoComplete={autocomplete}
      />
      <FormControlError errorName={name} />
    </>
  );
};
