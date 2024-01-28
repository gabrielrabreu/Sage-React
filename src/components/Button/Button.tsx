import React from "react";

import styles from "./Button.module.scss";

export interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button className={styles.button}>{label}</button>;
};

export default Button;
