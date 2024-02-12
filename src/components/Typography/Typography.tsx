import React from "react";
import classnames from "classnames";

import { WithChildren, WithClassName, WithTestId } from "../../interfaces";

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
interface TypographyProps extends WithChildren, WithClassName, WithTestId {
  /**
   * The variant of the typography.
   */
  variant: TypographyVariant;
}

/**
 * Typography Component: Renders text with specified variant styles.
 * @param {TypographyProps} props - Component props.
 * @returns {React.ReactElement} - A JSX element representing the typography.
 */
const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
  testId,
}) => {
  return (
    <p
      className={classnames(styles.typography, styles[variant], className)}
      data-testid={testId}
    >
      {children}
    </p>
  );
};

export default Typography;
