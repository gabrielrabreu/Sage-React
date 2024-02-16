import React from "react";
import { render } from "@testing-library/react";

import HeaderNavItem from "./HeaderNavItem";

describe("HeaderNavItem", () => {
  it("renders children correctly", () => {
    const { getByTestId } = render(
      <HeaderNavItem testId="nav-item">Item</HeaderNavItem>
    );
    const navItemElement = getByTestId("nav-item");
    expect(navItemElement).toBeInTheDocument();
    expect(navItemElement).toHaveTextContent("Item");
  });

  it("applies the default class name", () => {
    const { getByTestId } = render(
      <HeaderNavItem testId="nav-item">Item</HeaderNavItem>
    );
    const navItemElement = getByTestId("nav-item");
    expect(navItemElement).toBeInTheDocument();
    expect(navItemElement).toHaveClass("headerNavItem");
  });

  it("applies the provided class name", () => {
    const customClassName = "custom-nav-item";
    const { getByTestId } = render(
      <HeaderNavItem className={customClassName} testId="nav-item">
        Item
      </HeaderNavItem>
    );
    const navItemElement = getByTestId("nav-item");
    expect(navItemElement).toBeInTheDocument();
    expect(navItemElement).toHaveClass(customClassName);
  });
});
