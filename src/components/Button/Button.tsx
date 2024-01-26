import React from "react";

import "./Button.scss";

export interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
}

/**
 * Primary UI component for user interaction
 */
const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default Button;
