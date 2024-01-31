import React from "react";

import styles from "./Button.module.scss";

/**
 * Props for the Button component.
 */
export interface ButtonProps {
  /**
   * The label of the button.
   */
  label: string;

  /**
   * Indicates whether the button is disabled or not.
   * @default false
   */
  disabled?: boolean;

  /**
   * The callback function to be called when the button is clicked.
   */
  onClick?: () => void;
}

/**
 * Button component used for user interactions.
 * @param {ButtonProps} props - The component props.
 * @returns {React.FC<ButtonProps>} A functional component representing the button.
 */
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={styles.button}
      type="button"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;
