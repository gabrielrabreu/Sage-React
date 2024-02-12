import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import { WithClassName } from "../../interfaces";

import styles from "./Breadcrumb.module.scss";

export interface BreadcrumbItemProps {
  name: string;
  link: string;
}

export interface BreadcrumbProps extends WithClassName {
  items: BreadcrumbItemProps[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
  return (
    <nav>
      <ol className={classNames(styles.breadcrumb, className)}>
        {items.map((item, index) => (
          <li key={index} className={styles.breadcrumbItem}>
            <NavLink
              end
              to={item.link}
              className={(nav) => (nav.isActive ? styles.active : "")}
            >
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
