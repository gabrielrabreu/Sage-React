import React from "react";
import classNames from "classnames";

import { WithDefaultChildren } from "../../../interfaces";
import AsideNavItem, { AsideNavItemProps } from "./AsideNavItem/AsideNavItem";
import AsideNav, { AsideNavProps } from "./AsideNav/AsideNav";

import styles from "./Aside.module.scss";

/**
 * Props for the Aside component.
 */
interface AsideProps extends WithDefaultChildren {
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
