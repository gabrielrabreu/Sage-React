import React from "react";
import { Control, Controller, FieldError } from "react-hook-form";

import FormFieldLabel from "./FormFieldLabel/FormFieldLabel";
import FormFieldError from "./FormFieldError/FormFieldError";

import styles from "./FormField.module.scss";

interface FormFieldProps {
  name: string;
  label: string;
  control: Control<any>;
  rules?: any;
  error?: FieldError;
  render: (field: {
    onChange: (event: any) => void;
    onBlur: () => void;
    value: any;
    name: string;
    ref: (instance: any) => void;
  }) => JSX.Element;
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  control,
  rules,
  error,
  render,
}) => {
  return (
    <div className={styles.formField}>
      <FormFieldLabel htmlFor={name} text={label} />
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => render(field)}
      />
      <FormFieldError message={error?.message} />
    </div>
  );
};

export default FormField;
