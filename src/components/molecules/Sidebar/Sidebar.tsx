import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Sidebar.module.scss";
import { Typography } from "../../atoms";

/**
 * Props for the Sidebar component.
 */
interface SidebarProps {
  /**
   * Array of headings with associated items.
   */
  headings: {
    /**
     * Heading name.
     */
    name?: string;
    /**
     * Array of items under the heading.
     */
    items: {
      /**
       * Icon for the item.
       */
      icon: React.ReactNode;
      /**
       * Name or label for the item.
       */
      name: string;
      /**
       * Link for the item.
       */
      link: string;
    }[];
  }[];
}

/**
 * Sidebar Component: Renders a sidebar navigation with headings and items.
 * @param {SidebarProps} props - Component props.
 * @returns {React.ReactElement} - A JSX element representing the sidebar.
 */
const Sidebar: React.FC<SidebarProps> = ({ headings }) => {
  return (
    <aside className={styles.sidebar}>
      {headings && (
        <ul>
          {headings.map((heading, index) => (
            <React.Fragment key={index}>
              {heading.name && (
                <li className={styles.heading} data-testid={`heading-${index}`}>
                  <p>{heading.name}</p>
                </li>
              )}
              {heading.items.map((item, subIndex) => (
                <li key={subIndex} className={styles.item}>
                  <NavLink
                    to={item.link}
                    className={(nav) => (nav.isActive ? styles.active : "")}
                    data-testid={`navlink-${subIndex}`}
                  >
                    {item.icon}
                    <p>{item.name}</p>
                  </NavLink>
                </li>
              ))}
            </React.Fragment>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default Sidebar;
