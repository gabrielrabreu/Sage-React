import React from "react";
import classnames from "classnames";

import { WithClassName, WithTestId } from "../../interfaces";

import styles from "./DatePicker.module.scss";

/**
 * Props for the DatePicker component.
 */
interface DatePickerProps extends WithClassName, WithTestId {
  /**
   * Current value of the DatePicker.
   */
  value?: Date;
  /**
   * Callback called when the value of the DatePicker changes.
   * @param date - New selected date.
   */
  onChange: (date: Date) => void;
}

/**
 * DatePicker Component: A date input component.
 * @param {DatePickerProps} props - Component properties.
 * @returns {React.ReactElement} - A JSX element representing the DatePicker.
 */
const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  className,
  testId,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = new Date(event.target.value);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <input
      type="date"
      className={classnames(styles.datePicker, className)}
      value={value?.toISOString().split("T")[0]}
      onChange={handleChange}
      data-testid={testId}
    />
  );
};

export default DatePicker;
