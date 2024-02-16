import React from "react";
import classNames from "classnames";

import { WithDefaultChildren } from "../../../interfaces";
import CardTitle, { CardTitleProps } from "./CardTitle/CardTitle";

import styles from "./Card.module.scss";

/**
 * Props for the Card component.
 */
interface CardProps extends WithDefaultChildren {}

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
