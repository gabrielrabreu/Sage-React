import React from "react";
import classnames from "classnames";

import { WithDefaultChildren } from "../../../interfaces";
import GridItem, { GridItemProps } from "./GridItem/GridItem";

import styles from "./Grid.module.scss";

/**
 * Props for the Grid component.
 */
interface GridProps extends WithDefaultChildren {
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
