import React from "react";

import styles from "./IconButton.module.scss";

export interface IconButtonProps {
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
const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <button
      className={styles.iconButton}
      onClick={onClick}
      data-testid="icon-button"
    >
      {icon}
    </button>
  );
};

export default IconButton;
