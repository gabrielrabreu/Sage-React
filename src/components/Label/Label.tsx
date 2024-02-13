import React from "react";
import classnames from "classnames";

import { WithClassName, WithTestId } from "../../interfaces";
import { Typography } from "../Typography";

import styles from "./Label.module.scss";

/**
 * Props for the Label component.
 */
interface LabelProps extends WithClassName, WithTestId {
  /**
   * The "for" attribute, specifying which form element a label is bound to.
   */
  htmlFor: string;
  /**
   * The text content of the label.
   */
  text: string;
}

/**
 * Label Component: Renders a label for a form element.
 * @param {LabelProps} props - Component props.
 * @returns {React.ReactElement} - A JSX element representing the label.
 */
const Label: React.FC<LabelProps> = ({ htmlFor, text, className, testId }) => {
  return (
    <label
      className={classnames(styles.label, className)}
      htmlFor={htmlFor}
      data-testid={testId}
    >
      <Typography variant="label">{text}</Typography>
    </label>
  );
};

export default Label;
