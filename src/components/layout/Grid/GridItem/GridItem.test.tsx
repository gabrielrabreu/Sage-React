import React from "react";
import { render } from "@testing-library/react";

import GridItem from "./GridItem";

describe("GridItem", () => {
  it("renders children correctly", () => {
    const { getByTestId } = render(
      <GridItem testId="grid-item">Item</GridItem>
    );
    const gridItemElement = getByTestId("grid-item");
    expect(gridItemElement).toBeInTheDocument();
    expect(gridItemElement).toHaveTextContent("Item");
  });

  it("applies the provided column and row spans", () => {
    const { getByTestId } = render(
      <GridItem cols={2} rows={3} testId="grid-item">
        Item
      </GridItem>
    );
    const gridItemElement = getByTestId("grid-item");
    expect(gridItemElement).toHaveClass("cols-2");
    expect(gridItemElement).toHaveClass("rows-3");
  });

  it("applies the default class name", () => {
    const { getByTestId } = render(
      <GridItem cols={2} rows={3} testId="grid-item">
        Item
      </GridItem>
    );
    const gridItemElement = getByTestId("grid-item");
    expect(gridItemElement).toHaveClass("gridItem");
  });

  it("applies the provided class name", () => {
    const customClassName = "custom-grid-item";
    const { getByTestId } = render(
      <GridItem
        className={customClassName}
        cols={2}
        rows={3}
        testId="grid-item"
      >
        Item
      </GridItem>
    );
    const gridItemElement = getByTestId("grid-item");
    expect(gridItemElement).toHaveClass(customClassName);
  });
});
