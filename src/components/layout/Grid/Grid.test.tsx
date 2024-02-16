import React from "react";
import { render } from "@testing-library/react";
import Grid from "./Grid";

describe("Grid", () => {
  it("renders children correctly", () => {
    const { getByTestId } = render(<Grid testId="grid">Hello, World!</Grid>);
    const gridElement = getByTestId("grid");
    expect(gridElement).toBeInTheDocument();
    expect(gridElement).toHaveTextContent("Hello, World!");
  });

  it("applies the provided column and row template", () => {
    const { getByTestId } = render(
      <Grid cols={2} rows={3} testId="grid">
        Hello, World!
      </Grid>
    );
    const gridElement = getByTestId("grid");
    expect(gridElement).toHaveClass("cols-2");
    expect(gridElement).toHaveClass("rows-3");
  });

  it("applies the default class name", () => {
    const { getByTestId } = render(<Grid testId="grid">Hello, World!</Grid>);
    const gridElement = getByTestId("grid");
    expect(gridElement).toHaveClass("grid");
  });

  it("applies the provided class name", () => {
    const customClassName = "custom-grid";
    const { getByTestId } = render(
      <Grid className={customClassName} testId="grid">
        Hello, World!
      </Grid>
    );
    const gridElement = getByTestId("grid");
    expect(gridElement).toHaveClass(customClassName);
  });
});
