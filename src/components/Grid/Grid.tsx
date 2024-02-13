import React from "react";
import classnames from "classnames";

import { WithChildren, WithClassName, WithTestId } from "../../interfaces";

import styles from "./Grid.module.scss";

/**
 * Props for the GridItem component.
 */
interface GridItemProps extends WithChildren, WithClassName, WithTestId {
  /**
   * Number of columns the item spans.
   */
  cols?: number;
  /**
   * Number of rows the item spans.
   */
  rows?: number;
}

/**
 * GridItem Component: Renders a grid item with customizable column and row spans.
 * @param {GridItemProps} props - Component props.
 * @returns {React.ReactElement} - A JSX element representing the grid item.
 */
const GridItem: React.FC<GridItemProps> = ({
  cols = 1,
  rows = 1,
  children,
  className,
  testId,
}) => {
  return (
    <div
      className={classnames(
        styles.gridItem,
        styles[`cols-${cols}`],
        styles[`rows-${rows}`],
        className
      )}
      data-testid={testId}
    >
      {children}
    </div>
  );
};

/**
 * Props for the Grid component.
 */
interface GridProps extends WithChildren, WithClassName, WithTestId {
  /**
   * Number of columns in the grid.
   */
  cols?: number;
  /**
   * Number of rows in the grid.
   */
  rows?: number;
}

/**
 * GridComponents interface containing the nested components.
 */
interface GridComponents {
  /**
   * Component for rendering a grid item.
   */
  Item: React.FC<GridItemProps>;
}

/**
 * Grid Component: Renders a grid with customizable columns and rows.
 * @param {GridProps} props - Component props.
 * @returns {React.ReactElement} - A JSX element representing the grid.
 */
const Grid: React.FC<GridProps> & GridComponents = ({
  cols = 1,
  rows = 1,
  children,
  className,
  testId,
}) => {
  return (
    <div
      className={classnames(
        styles.grid,
        styles[`cols-${cols}`],
        styles[`rows-${rows}`],
        className
      )}
      data-testid={testId}
    >
      {children}
    </div>
  );
};

Grid.Item = GridItem;

export default Grid;
