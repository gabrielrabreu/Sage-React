import React from "react";
import classNames from "classnames";

import { WithDefaultChildren } from "../../../interfaces";

import styles from "./Footer.module.scss";

/**
 * Props for the Footer component.
 */
interface FooterProps extends WithDefaultChildren {}

/**
 * Footer Component: Renders a footer with customizable content.
 * @param {FooterProps} props - Component props.
 * @returns {React.ReactElement} - A JSX element representing the footer.
 */
const Footer: React.FC<FooterProps> = ({ children, className, testId }) => {
  return (
    <footer
      className={classNames(styles.footer, className)}
      data-testid={testId}
    >
      {children}
    </footer>
  );
};

export default Footer;
