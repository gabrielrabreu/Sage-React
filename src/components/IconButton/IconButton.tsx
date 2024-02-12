import React from "react";
import classNames from "classnames";

import { WithClassName, WithTestId } from "../../interfaces";

import styles from "./IconButton.module.scss";

export interface IconButtonProps extends WithClassName, WithTestId {
  /**
   * The icon to be displayed inside the button.
   */
  icon: React.ReactNode;
  /**
   * Function to be called when the button is clicked.
   */
  onClick?: () => void;
}

/**
 * IconButton Component: Renders a clickable button with an icon.
 * @param {IconButtonProps} props - Component props.
 * @returns {React.ReactElement} - A JSX element representing the button with an icon.
 */
const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  className,
  testId,
}) => {
  return (
    <button
      className={classNames(styles.iconButton, className)}
      onClick={onClick}
      data-testid={testId}
    >
      {icon}
    </button>
  );
};

export default IconButton;
