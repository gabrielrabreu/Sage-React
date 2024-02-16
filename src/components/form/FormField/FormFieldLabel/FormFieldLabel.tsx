import React from "react";
import classnames from "classnames";

import { WithClassName, WithTestId } from "../../../../interfaces";

import styles from "./FormFieldLabel.module.scss";

/**
 * Props for the FormFieldLabel component.
 */
interface FormFieldLabelProps extends WithClassName, WithTestId {
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
 * FormFieldLabel Component: Renders a label for a form element.
 * @param {LabelProps} props - Component props.
 * @returns {React.ReactElement} - A JSX element representing the label.
 */
const FormFieldLabel: React.FC<FormFieldLabelProps> = ({
  htmlFor,
  text,
  className,
  testId,
}) => {
  return (
    <label
      className={classnames(styles.formFieldLabel, className)}
      htmlFor={htmlFor}
      data-testid={testId}
    >
      <p>{text}</p>
    </label>
  );
};

export default FormFieldLabel;
