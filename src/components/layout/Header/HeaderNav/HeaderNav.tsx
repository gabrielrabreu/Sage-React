import React from "react";
import classNames from "classnames";

import { WithDefaultChildren } from "../../../../interfaces";

import styles from "./HeaderNav.module.scss";

/**
 * Props for the HeaderNav component.
 */
export interface HeaderNavProps extends WithDefaultChildren {}

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

export default HeaderNav;
