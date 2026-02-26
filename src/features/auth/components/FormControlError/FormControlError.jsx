import { Error } from "@shared/ui/Error";
import { useFormContext } from "react-hook-form";

import * as styles from "./FormControlError.module.css";

export const FormControlError = ({ errorName }) => {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    errors[errorName] && (
      <Error className={styles["auth-error"]} variant="small">
        <p>{errors[errorName].message}</p>
      </Error>
    )
  );
};
