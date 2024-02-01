import React, { ChangeEvent } from "react";

import styles from "./InputText.module.scss";

/**
 * Props for the InputText component.
 */
export interface InputTextProps {
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
}

/**
 * Input Text Component: A basic text input.
 * @param {InputTextProps} props - Component props.
 * @returns {React.FC<InputTextProps>} - A JSX element representing the input text.
 */
const InputText: React.FC<InputTextProps> = (props) => {
  /**
   * Handles the change event of the input.
   * @param event - Change event object.
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  };

  return (
    <input
      type="text"
      className={styles.inputText}
      value={props.value}
      placeholder={props.placeholder}
      maxLength={props.maxLength}
      disabled={props.disabled}
      onChange={handleChange}
      data-testid="input-text"
    />
  );
};

export default InputText;
