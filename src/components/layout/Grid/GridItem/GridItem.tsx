import React from "react";
import classnames from "classnames";

import { WithDefaultChildren } from "../../../../interfaces";

import styles from "./GridItem.module.scss";

/**
 * Props for the GridItem component.
 */
export interface GridItemProps extends WithDefaultChildren {
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

export default GridItem;
