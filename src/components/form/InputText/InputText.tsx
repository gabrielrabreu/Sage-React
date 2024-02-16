import React, { ChangeEvent, FocusEvent } from "react";
import classnames from "classnames";

import { WithClassName, WithTestId } from "../../../interfaces";

import styles from "./InputText.module.scss";

/**
 * Props for the InputText component.
 */
interface InputTextProps extends WithClassName, WithTestId {
  /**
   * Current value of the input.
   */
  value: string;
  /**
   * Placeholder text for the input.
   */
  placeholder?: string;
  /**
   * Maximum length of the input value.
   */
  maxLength?: number;
  /**
   * Indicates whether the input is disabled or not.
   * @default false
   */
  disabled?: boolean;
  /**
   * Callback function triggered when the input value changes.
   * @param value - New value of the input.
   */
  onChange?: (value: string) => void;
  /**
   * Callback function triggered when the input loses focus.
   * @param event - The blur event object.
   */
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

/**
 * Input Text Component: A basic text input.
 * @param {InputTextProps} props - Component props.
 * @returns {React.FC<InputTextProps>} - A JSX element representing the input text.
 */
const InputText: React.FC<InputTextProps> = ({
  value,
  placeholder,
  maxLength,
  disabled,
  onChange,
  onBlur,
  className,
  testId,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("change");
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    console.log("blur");
    if (onBlur) {
      onBlur(event);
    }
  };

  return (
    <input
      type="text"
      className={classnames(styles.inputText, className)}
      value={value}
      placeholder={placeholder}
      maxLength={maxLength}
      disabled={disabled}
      onChange={handleChange}
      onBlur={handleBlur}
      data-testid={testId}
    />
  );
};

export default InputText;
