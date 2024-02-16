import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import { WithDefault } from "../../../../interfaces";

import styles from "./AsideNavItem.module.scss";

/**
 * Props for the AsideNavItem component.
 */
export interface AsideNavItemProps extends WithDefault {
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

export default AsideNavItem;
