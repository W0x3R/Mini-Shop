import { FormControlError } from "@features/auth/components/FormControlError";
import { useId } from "react";
import { useFormContext } from "react-hook-form";

import * as styles from "./FormInput.module.css";

export const FormInput = ({ labelText, name, type = "text" }) => {
  const id = useId();
  const { register } = useFormContext();
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {labelText}
      </label>
      <input id={id} className={styles.input} {...register(name)} type={type} />
      <FormControlError errorName={name} />
    </>
  );
};
