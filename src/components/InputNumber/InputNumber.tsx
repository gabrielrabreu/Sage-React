import React, { ChangeEvent } from "react";

import styles from "./InputNumber.module.scss";

/**
 * Props for the InputNumber component.
 */
export interface InputNumberProps {
  /**
   * Current value of the input.
   */
  value: number;

  /**
   * Placeholder text for the input.
   */
  placeholder?: string;

  /**
   * Minimum value allowed for the input.
   */
  min?: number;

  /**
   * Maximum value allowed for the input.
   */
  max?: number;

  /**
   * Indicates whether the input is disabled or not.
   * @default false
   */
  disabled?: boolean;

  /**
   * Callback function triggered when the input value changes.
   * @param value - New value of the input.
   */
  onChange?: (value: number) => void;
}

/**
 * Input Number Component: A basic number input.
 * @param {InputNumberProps} props - Component props.
 * @returns {React.FC<InputNumberProps>} - A JSX element representing the input number.
 */
const InputNumber: React.FC<InputNumberProps> = (props) => {
  /**
   * Handles the change event of the input.
   * @param event - Change event object.
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    if (!isNaN(newValue) && props.onChange) {
      props.onChange(newValue);
    }
  };

  return (
    <input
      type="number"
      className={styles.inputNumber}
      value={props.value}
      placeholder={props.placeholder}
      min={props.min}
      max={props.max}
      disabled={props.disabled}
      onChange={handleChange}
      data-testid="input-number"
    />
  );
};

export default InputNumber;
