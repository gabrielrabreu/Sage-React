import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import { WithChildren, WithClassName, WithTestId } from "../../interfaces";

import styles from "./Aside.module.scss";

/**
 * Props for the AsideNavItem component.
 */
interface AsideNavItemProps extends WithClassName, WithTestId {
  /**
   * The icon to be displayed.
   */
  icon: React.ReactNode;
  /**
   * The text to be displayed.
   */
  text: string;
  /**
   * The link for the navigation item.
   */
  link: string;
}

/**
 * AsideNavItem Component: Renders a navigation item within the aside.
 * @param {AsideNavItemProps} props - Component props.
 * @returns {React.ReactElement} - A JSX element representing the navigation item.
 */
const AsideNavItem: React.FC<AsideNavItemProps> = ({
  icon,
  text,
  link,
  className,
  testId,
}) => {
  return (
    <li
      className={classNames(styles.asideNavItem, className)}
      data-testid={testId}
    >
      <NavLink
        to={link}
        className={(nav) => (nav.isActive ? styles.asideNavItemActive : "")}
      >
        {icon}
        {text}
      </NavLink>
    </li>
  );
};

/**
 * Props for the AsideNav component.
 */
interface AsideNavProps extends WithChildren, WithClassName, WithTestId {}

/**
 * AsideNav Component: Renders a navigation within the aside.
 * @param {AsideNavProps} props - Component props.
 * @returns {React.ReactElement} - A JSX element representing the navigation.
 */
const AsideNav: React.FC<AsideNavProps> = ({ children, className, testId }) => {
  return (
    <nav
      className={classNames(styles.asideNav, className)}
      data-testid={testId}
    >
      <ul>{children}</ul>
    </nav>
  );
};

/**
 * Props for the Aside component.
 */
interface AsideProps extends WithChildren, WithClassName, WithTestId {
  /**
   * Determines whether the aside should be hidden.
   */
  hidden: boolean;
  /**
   * Class name to apply when the aside is hidden.
   */
  hiddenClassName: string;
}

/**
 * AsideComponents interface containing the nested components.
 */
interface AsideComponents {
  /**
   * Component for navigation or additional actions.
   */
  Nav: React.FC<AsideNavProps>;
  /**
   * Nested component for navigation items.
   */
  NavItem: React.FC<AsideNavItemProps>;
}

/**
 * Aside Component: Renders an aside with customizable content.
 * @param {AsideProps} props - Component props.
 * @returns {React.ReactElement} - A JSX element representing the aside.
 */
const Aside: React.FC<AsideProps> & AsideComponents = ({
  hidden,
  hiddenClassName,
  children,
  className,
  testId,
}) => {
  return (
    <aside
      className={classNames(
        styles.aside,
        { [hiddenClassName]: hidden },
        className
      )}
      data-testid={testId}
    >
      {children}
    </aside>
  );
};

Aside.Nav = AsideNav;
Aside.NavItem = AsideNavItem;

export default Aside;
