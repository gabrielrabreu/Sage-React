import React from "react";
import classNames from "classnames";

import { WithDefaultChildren } from "../../../../interfaces";

import styles from "./HeaderNavItem.module.scss";

/**
 * Props for the HeaderNavItem component.
 */
export interface HeaderNavItemProps extends WithDefaultChildren {}

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

export default HeaderNavItem;
