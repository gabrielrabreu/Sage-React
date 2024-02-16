import React from "react";
import { render } from "@testing-library/react";

import AsideNav from "./AsideNav";

describe("Aside.Nav", () => {
  it("renders children correctly", () => {
    const { getByTestId } = render(
      <AsideNav testId="nav">
        <p>Navigation Component</p>
      </AsideNav>
    );
    const navElement = getByTestId("nav");
    expect(navElement).toBeInTheDocument();
    expect(navElement).toHaveTextContent("Navigation Component");
  });

  it("applies the default class name", () => {
    const { getByTestId } = render(
      <AsideNav testId="aside-nav">
        <p>Navigation Component</p>
      </AsideNav>
    );
    const navElement = getByTestId("aside-nav");
    expect(navElement).toBeInTheDocument();
    expect(navElement).toHaveClass("asideNav");
  });

  it("applies the provided class name", () => {
    const customClassName = "custom-aside-nav";
    const { getByTestId } = render(
      <AsideNav className={customClassName} testId="aside-nav">
        <p>Navigation Component</p>
      </AsideNav>
    );
    const navElement = getByTestId("aside-nav");
    expect(navElement).toBeInTheDocument();
    expect(navElement).toHaveClass(customClassName);
  });
});
