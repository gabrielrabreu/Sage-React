import React, { ChangeEvent, FocusEvent } from "react";
import classnames from "classnames";

import { WithClassName, WithTestId } from "../../../interfaces";

import styles from "./Input.module.scss";

/**
 * Props for the Input component.
 */
interface InputProps extends WithClassName, WithTestId {
  /**
   * Type of the input.
   */
  type: string;
  /**
   * Current value of the input.
   */
  value: string | number | undefined;
  /**
   * Placeholder text for the input.
   */
  placeholder?: string;
  /**
   * Indicates whether the input is disabled or not.
   * @default false
   */
  disabled?: boolean;
  /**
   * Callback function triggered when the input value changes.
   * @param value - New value of the input.
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Callback function triggered when the input loses focus.
   * @param event - The blur event object.
   */
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

/**
 * Input Component: A basic input.
 * @param {InputProps} props - Component props.
 * @returns {React.FC<InputProps>} - A JSX element representing the input.
 */
const Input: React.FC<InputProps> = ({
  type,
  value,
  placeholder,
  disabled,
  onChange,
  onBlur,
  className,
  testId,
}) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
      className={classnames(styles.input, className)}
      data-testid={testId}
    />
  );
};

export default Input;
