import React from "react";
import classNames from "classnames";

import { WithDefaultChildren } from "../../../../interfaces";

import styles from "./AsideNav.module.scss";

/**
 * Props for the AsideNav component.
 */
export interface AsideNavProps extends WithDefaultChildren {}

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

export default AsideNav;
