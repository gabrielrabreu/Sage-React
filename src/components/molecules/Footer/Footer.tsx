import React from "react";

import styles from "./Footer.module.scss";
import { Typography } from "../../atoms";

/**
 * Props for the Footer component.
 */
interface FooterProps {
  /**
   * The name or title for the copyright notice.
   */
  name: string;
  /**
   * The year for the copyright notice.
   */
  year: number;
}

/**
 * Footer Component: Renders a simple footer with a copyright notice.
 * @param {FooterProps} props - Component props.
 * @returns {React.ReactElement} - A JSX element representing the footer.
 */
const Footer: React.FC<FooterProps> = ({ name, year }) => {
  return (
    <footer className={styles.footer} data-testid="footer">
      <Typography variant="body">
        &copy; {year} {name}. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
