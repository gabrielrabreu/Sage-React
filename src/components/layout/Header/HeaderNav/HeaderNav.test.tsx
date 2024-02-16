import React from "react";
import { render } from "@testing-library/react";

import HeaderNav from "./HeaderNav";

describe("HeaderNav", () => {
  it("renders children correctly", () => {
    const { getByTestId } = render(
      <HeaderNav testId="nav">
        <li>Item 1</li>
        <li>Item 2</li>
      </HeaderNav>
    );
    const navElement = getByTestId("nav");
    expect(navElement).toBeInTheDocument();
    expect(navElement).toHaveTextContent("Item 1");
    expect(navElement).toHaveTextContent("Item 2");
  });

  it("applies the default class name", () => {
    const { getByTestId } = render(
      <HeaderNav testId="nav">
        <li>Item 1</li>
        <li>Item 2</li>
      </HeaderNav>
    );
    const navElement = getByTestId("nav");
    expect(navElement).toHaveClass("headerNav");
  });

  it("applies the provided class name", () => {
    const customClassName = "custom-nav";
    const { getByTestId } = render(
      <HeaderNav className={customClassName} testId="nav">
        <li>Item 1</li>
        <li>Item 2</li>
      </HeaderNav>
    );
    const navElement = getByTestId("nav");
    expect(navElement).toHaveClass(customClassName);
  });
});
