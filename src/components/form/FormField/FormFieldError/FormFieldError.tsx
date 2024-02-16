import React from "react";
import classNames from "classnames";

import { WithClassName, WithTestId } from "../../../../interfaces";

import styles from "./FormFieldError.module.scss";

/**
 * Props for the FormFieldError component.
 */
interface FormFieldErrorProps extends WithClassName, WithTestId {
  /**
   * The error message to be displayed.
   */
  message?: string;
}

/**
 * FormFieldError Component: Renders an form field error.
 * @param {FormFieldErrorProps} props - Component props.
 * @returns {React.ReactElement | null} - A JSX element representing the form field error, or null if no message is provided.
 */
const FormFieldError: React.FC<FormFieldErrorProps> = ({
  message,
  className,
  testId,
}) => {
  return (
    message && (
      <div
        className={classNames(styles.formFieldError, className)}
        data-testid={testId}
      >
        <p>{message}</p>
      </div>
    )
  );
};

export default FormFieldError;
