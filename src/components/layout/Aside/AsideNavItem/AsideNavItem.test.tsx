import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

import AsideNavItem from "./AsideNavItem";

describe("AsideNavItem", () => {
  it("renders children correctly", () => {
    const { getByTestId } = render(
      <Router>
        <AsideNavItem
          icon={<span>Icon</span>}
          text="Link Text"
          link="/path"
          testId="nav-item"
        />
      </Router>
    );
    const navItemElement = getByTestId("nav-item");
    expect(navItemElement).toBeInTheDocument();
    expect(navItemElement).toHaveTextContent("Link Text");
  });

  it("applies the default class name", () => {
    const { getByTestId } = render(
      <Router>
        <AsideNavItem
          icon={<span>Icon</span>}
          text="Text"
          link="/"
          testId="aside-nav-item"
        />
      </Router>
    );
    const navItemElement = getByTestId("aside-nav-item");
    expect(navItemElement).toBeInTheDocument();
    expect(navItemElement).toHaveClass("asideNavItem");
  });

  it("applies the provided class name", () => {
    const customClassName = "custom-aside-nav-item";
    const { getByTestId } = render(
      <Router>
        <AsideNavItem
          icon={<span>Icon</span>}
          text="Text"
          link="/"
          className={customClassName}
          testId="aside-nav-item"
        />
      </Router>
    );
    const navItemElement = getByTestId("aside-nav-item");
    expect(navItemElement).toBeInTheDocument();
    expect(navItemElement).toHaveClass(customClassName);
  });
});
