import React from "react";
import classNames from "classnames";

import { WithClassName, WithTestId } from "../../interfaces";
import { Typography } from "../Typography";

import styles from "./ErrorMessage.module.scss";

/**
 * Props for the ErrorMessage component.
 */
interface ErrorMessageProps extends WithClassName, WithTestId {
  /**
   * The error message to be displayed.
   */
  message?: string;
}

/**
 * ErrorMessage Component: Renders an error message.
 * @param {ErrorMessageProps} props - Component props.
 * @returns {React.ReactElement | null} - A JSX element representing the error message, or null if no message is provided.
 */
const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  className,
  testId,
}) => {
  return (
    message && (
      <div
        className={classNames(styles.errorMessage, className)}
        data-testid={testId}
      >
        <Typography variant="error">{message}</Typography>
      </div>
    )
  );
};

export default ErrorMessage;
