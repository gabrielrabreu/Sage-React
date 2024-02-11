import React from "react";

import styles from "./Button.module.scss";

/**
 * Props for the Button component.
 */
interface ButtonProps {
  /**
   * The text content to be displayed inside the button.
   */
  text: string;
  /**
   * Function to be called when the button is clicked.
   */
  onClick?: () => void;
}

/**
 * Button Component: Renders a clickable button with customizable text content.
 * @param {ButtonProps} props - Component props.
 * @returns {React.ReactElement} - A JSX element representing the button.
 */
const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick} data-testid="button">
      {text}
    </button>
  );
};

export default Button;
