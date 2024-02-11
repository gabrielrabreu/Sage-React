import React from "react";

import { Icon, IconButton, Typography } from "../../atoms";

import styles from "./Header.module.scss";

/**
 * Props for the Header component.
 */
export interface HeaderProps {
  /**
   * Determines whether the menu button should be displayed.
   */
  showMenuButton?: boolean;
  /**
   * Function to be called when the menu button is clicked.
   */
  onMenuButtonClick?: () => void;
  /**
   * The name or title to be displayed in the header.
   */
  name: string;
  /**
   * List of actions to be displayed on the right side of the header.
   */
  actions?: {
    /**
     * Icon to be displayed for the action.
     */
    icon: React.ReactNode;
    /**
     * Function to be called when the action is clicked.
     */
    onClick?: () => void;
  }[];
}

/**
 * Header Component: Renders a simple header witht title and actions.
 * @param {HeaderProps} props - Component props.
 * @returns {React.ReactElement} - A JSX element representing the header.
 */
const Header: React.FC<HeaderProps> = ({
  showMenuButton,
  onMenuButtonClick,
  name,
  actions,
}) => {
  return (
    <header className={styles.header}>
      {showMenuButton && (
        <IconButton icon={<Icon name="Menu" />} onClick={onMenuButtonClick} />
      )}
      <Typography variant="body">{name}</Typography>
      {actions && (
        <nav>
          <ul>
            {actions.map((action, index) => (
              <li key={index}>
                <IconButton icon={action.icon} onClick={action.onClick} />
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
