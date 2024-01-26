import React from "react";

import "./Button.scss";

export interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button className="my-component-library">{label}</button>;
};

export default Button;
