import React from "react";
import classNames from "classnames";

import { WithChildren, WithClassName, WithTestId } from "../../interfaces";

import styles from "./Header.module.scss";

/**
 * Props for the HeaderNavItem component.
 */
interface HeaderNavItemProps extends WithChildren, WithClassName, WithTestId {}

/**
 * HeaderNavItem Component: Renders an item within the header navigation.
 * @param {HeaderNavItemProps} props - Component props.
 * @returns {React.ReactElement} - A JSX element representing the navigation item.
 */
const HeaderNavItem: React.FC<HeaderNavItemProps> = ({
  children,
  className,
  testId,
}) => {
  return (
    <li
      className={classNames(styles.headerNavItem, className)}
      data-testid={testId}
    >
      {children}
    </li>
  );
};

/**
 * Props for the HeaderNav component.
 */
interface HeaderNavProps extends WithChildren, WithClassName, WithTestId {}

/**
 * HeaderNav Component: Renders a navigation bar within the header.
 * @param {HeaderNavProps} props - Component props.
 * @returns {React.ReactElement} - A JSX element representing the navigation bar.
 */
const HeaderNav: React.FC<HeaderNavProps> = ({
  children,
  className,
  testId,
}) => {
  return (
    <nav
      className={classNames(styles.headerNav, className)}
      data-testid={testId}
    >
      <ul>{children}</ul>
    </nav>
  );
};

/**
 * Props for the Header component.
 */

interface HeaderProps extends WithChildren, WithClassName, WithTestId {}

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
