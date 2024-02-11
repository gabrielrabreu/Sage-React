import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Breadcrumb.module.scss";

interface BreadcrumbProps {
  items: {
    name: string;
    link?: string;
  }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav>
      <ol className={styles.breadcrumb}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            {item.link && (
              <NavLink
                to={item.link}
                className={(nav) => (nav.isActive ? styles.active : "")}
              >
                <span>{item.name}</span>
              </NavLink>
            )}
            {!item.link && <span>{item.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
