import React from "react";
import classnames from "classnames";

import styles from "./Typography.module.scss";

export type TypographyVariant =
  | "label"
  | "link"
  | "meta"
  | "error"
  | "title"
  | "highlight"
  | "caption"
  | "body"
  | "heading"
  | "subheading";

/**
 * Props for the Typography component.
 */
interface TypographyProps {
  /**
   * The variant of the typography.
   */
  variant: TypographyVariant;
  /**
   * The content to be displayed.
   */
  children: React.ReactNode;
}

/**
 * Typography Component: Renders text with specified variant styles.
 * @param {TypographyProps} props - Component props.
 * @returns {React.ReactElement} - A JSX element representing the typography.
 */
const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
  const typographyClass = classnames(styles.typography, styles[variant]);
  return (
    <p className={typographyClass} data-testid="typography">
      {children}
    </p>
  );
};

export default Typography;
