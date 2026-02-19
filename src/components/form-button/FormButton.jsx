import * as styles from "./FormButton.module.css";
import { Button } from "../../shared/button";

export const FormButton = ({ children, disabled = false, ...props }) => {
  return (
    <Button
      className={styles["form-button"]}
      type="submit"
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  );
};
