import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Breadcrumb.module.scss";

/**
 * Props for the BreadcrumbItem component.
 */
interface BreadcrumbItemProps {
  /**
   * Name of the breadcrumb item.
   */
  name: string;

  /**
   * Link for the breadcrumb item.
   */
  link?: string;
}

/**
 * Breadcrumb Item Component: Represents an individual item in the breadcrumb.
 * @param {BreadcrumbItemProps} props - Component props.
 * @returns {React.FC<BreadcrumbItemProps>} - A JSX element representing the breadcrumb item.
 */
const BreadcrumbItem: React.FC<BreadcrumbItemProps> = (props) => {
  const content = props.link ? (
    <NavLink
      to={props.link}
      className={(nav) => (nav.isActive ? styles.active : "")}
    >
      <span>{props.name}</span>
    </NavLink>
  ) : (
    <span>{props.name}</span>
  );

  return <li className={styles.item}>{content}</li>;
};

/**
 * Props for the Breadcrumb component.
 */
interface BreadcrumbProps {
  /**
   * List of breadcrumb items.
   */
  items: BreadcrumbItemProps[];
}

/**
 * Breadcrumb Component: Displays a navigation hierarchy in breadcrumb format.
 * @param {BreadcrumbProps} props - Component props.
 * @returns {React.FC<BreadcrumbProps>} - A JSX element representing the breadcrumb.
 */
const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  return (
    <nav>
      <ol className={styles.breadcrumb}>
        {props.items.map((item, index) => (
          <BreadcrumbItem key={index} name={item.name} link={item.link} />
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
