import React from "react";
import classNames from "classnames";

import { WithDefaultChildren } from "../../../../interfaces";

import styles from "./CardTitle.module.scss";

/**
 * Props for the CardTitle component.
 */
export interface CardTitleProps extends WithDefaultChildren {}

/**
 * CardTitle Component: Renders a title within the card.
 * @param {CardTitleProps} props - Component props.
 * @returns {React.ReactElement} - A JSX element representing the card title.
 */
const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className,
  testId,
}) => {
  return (
    <div
      className={classNames(styles.cardTitle, className)}
      data-testid={testId}
    >
      {children}
    </div>
  );
};

export default CardTitle;
