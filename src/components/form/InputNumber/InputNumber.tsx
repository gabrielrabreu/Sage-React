import React, { ChangeEvent } from "react";
import classnames from "classnames";

import { WithClassName, WithTestId } from "../../../interfaces";

import styles from "./InputNumber.module.scss";

/**
 * Props for the InputNumber component.
 */
export interface InputNumberProps extends WithClassName, WithTestId {
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
const InputNumber: React.FC<InputNumberProps> = ({
  value,
  placeholder,
  min,
  max,
  disabled,
  onChange,
  className,
  testId,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    if (!isNaN(newValue) && onChange) {
      onChange(newValue);
    }
  };

  return (
    <input
      type="number"
      className={classnames(styles.inputNumber, className)}
      value={value}
      placeholder={placeholder}
      min={min}
      max={max}
      disabled={disabled}
      onChange={handleChange}
      data-testid={testId}
    />
  );
};

export default InputNumber;
