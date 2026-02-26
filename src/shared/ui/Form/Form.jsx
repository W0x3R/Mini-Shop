import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useImperativeHandle } from "react";
import { FormProvider, useForm } from "react-hook-form";

import * as styles from "./Form.module.css";

export const Form = ({
  children,
  validationSchema,
  onSubmit,
  className,
  ref,
}) => {
  const methods = useForm({
    resolver: zodResolver(validationSchema),
  });

  const { handleSubmit, setError } = methods;

  useImperativeHandle(ref, () => ({
    setError,
  }));

  return (
    <FormProvider {...methods}>
      <form
        className={clsx(styles.form, className)}
        onSubmit={handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
};
