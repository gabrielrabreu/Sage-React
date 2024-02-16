import { ReactNode } from "react";

/**
 * Interface representing props with a className.
 */
export interface WithClassName {
  /**
   * Class name to be applied to the component.
   */
  className?: string;
}

/**
 * Interface representing props with a data-testid attribute.
 */
export interface WithTestId {
  /**
   * Value for the data-testid attribute.
   */
  testId?: string;
}

/**
 * Interface representing default props.
 */
export interface WithDefault extends WithClassName, WithTestId {}

/**
 * Interface representing props with children.
 */
export interface WithChildren {
  /**
   * The children components.
   */
  children?: ReactNode;
}

/**
 * Interface representing default props with children.
 */
export interface WithDefaultChildren extends WithDefault, WithChildren {}
