import React from "react";
import classNames from "classnames";

import { WithChildren, WithClassName, WithTestId } from "../../interfaces";

import styles from "./Card.module.scss";

/**
 * Props for the CardTitle component.
 */
interface CardTitleProps extends WithChildren, WithClassName, WithTestId {}

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

/**
 * Props for the Card component.
 */
interface CardProps extends WithChildren, WithClassName, WithTestId {}

/**
 * CardComponents interface containing the nested components.
 */
interface CardComponents {
  /**
   * Component for rendering a title within the card.
   */
  Title: React.FC<CardTitleProps>;
}

/**
 * Card Component: Renders a card with customizable content.
 * @param {CardProps} props - Component props.
 * @returns {React.ReactElement} - A JSX element representing the card.
 */
const Card: React.FC<CardProps> & CardComponents = ({
  children,
  className,
  testId,
}) => {
  return (
    <div className={classNames(styles.card, className)} data-testid={testId}>
      {children}
    </div>
  );
};

Card.Title = CardTitle;

export default Card;
