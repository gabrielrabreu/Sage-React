import React from "react";

import styles from "./Button.module.scss";

/**
 * Props for the Button component.
 */
export interface ButtonProps {
  /**
   * Label of the button.
   */
  label: string;

  /**
   * Indicates whether the button is disabled or not.
   * @default false
   */
  disabled?: boolean;

  /**
   * Callback function triggered when the button is clicked.
   */
  onClick?: () => void;
}

/**
 * Button Component: A basic button.
 * @param {ButtonProps} props - Component props.
 * @returns {React.FC<ButtonProps>} - A JSX element representing the button.
 */
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      type="button"
      className={styles.button}
      disabled={props.disabled}
      onClick={props.onClick}
      data-testid="button"
    >
      {props.label}
    </button>
  );
};

export default Button;
