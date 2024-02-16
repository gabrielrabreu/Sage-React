import React from "react";
import classNames from "classnames";

import { WithDefaultChildren } from "../../../interfaces";
import HeaderNav, { HeaderNavProps } from "./HeaderNav/HeaderNav";
import HeaderNavItem, {
  HeaderNavItemProps,
} from "./HeaderNavItem/HeaderNavItem";

import styles from "./Header.module.scss";

/**
 * Props for the Header component.
 */

interface HeaderProps extends WithDefaultChildren {}

/**
 * HeaderComponents interface containing the nested components.
 */
interface HeaderComponents {
  /**
   * Component for navigation or additional actions.
   */
  Nav: React.FC<HeaderNavProps>;
  /**
   * Component for items within the header navigation.
   */
  NavItem: React.FC<HeaderNavItemProps>;
}

/**
 * Header Component: Renders a header with customizable content.
 * @param {HeaderProps} props - Component props.
 * @returns {React.ReactElement} - A JSX element representing the header.
 */
const Header: React.FC<HeaderProps> & HeaderComponents = ({
  children,
  className,
  testId,
}) => {
  return (
    <header
      className={classNames(styles.header, className)}
      data-testid={testId}
    >
      {children}
    </header>
  );
};

Header.Nav = HeaderNav;
Header.NavItem = HeaderNavItem;

export default Header;
