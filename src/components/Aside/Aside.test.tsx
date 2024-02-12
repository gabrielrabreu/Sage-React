import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

import Aside from "./Aside";

describe("Aside", () => {
  it("renders children correctly", () => {
    const { getByTestId } = render(
      <Aside testId="aside" hidden={false} hiddenClassName="hidden">
        <p>Child Component</p>
      </Aside>
    );
    const asideElement = getByTestId("aside");
    expect(asideElement).toBeInTheDocument();
    expect(asideElement).toHaveTextContent("Child Component");
  });

  it("applies the default class name 'aside'", () => {
    const { getByTestId } = render(
      <Aside testId="aside" hidden={false} hiddenClassName="hidden">
        <p>Child Component</p>
      </Aside>
    );
    const asideElement = getByTestId("aside");
    expect(asideElement).toBeInTheDocument();
    expect(asideElement).toHaveClass("aside");
    expect(asideElement).not.toHaveClass("hidden");
  });

  it("applies the hidden class correctly when hidden", () => {
    const { getByTestId } = render(
      <Aside testId="aside" hidden={true} hiddenClassName="hidden">
        <p>Child Component</p>
      </Aside>
    );
    const asideElement = getByTestId("aside");
    expect(asideElement).toHaveClass("hidden");
  });

  it("applies the provided class name", () => {
    const customClassName = "custom-aside";
    const { getByTestId } = render(
      <Aside
        className={customClassName}
        testId="aside"
        hidden={false}
        hiddenClassName="hidden"
      >
        <p>Child Component</p>
      </Aside>
    );
    const asideElement = getByTestId("aside");
    expect(asideElement).toHaveClass(customClassName);
  });
});

describe("Aside.Nav", () => {
  it("renders children correctly", () => {
    const { getByTestId } = render(
      <Aside.Nav testId="nav">
        <p>Navigation Component</p>
      </Aside.Nav>
    );
    const navElement = getByTestId("nav");
    expect(navElement).toBeInTheDocument();
    expect(navElement).toHaveTextContent("Navigation Component");
  });

  it("applies the default class name 'asideNav'", () => {
    const { getByTestId } = render(
      <Aside.Nav testId="aside-nav">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </Aside.Nav>
    );
    const navElement = getByTestId("aside-nav");
    expect(navElement).toBeInTheDocument();
    expect(navElement).toHaveClass("asideNav");
  });

  it("applies the provided class name", () => {
    const customClassName = "custom-aside";
    const { getByTestId } = render(
      <Aside.Nav testId="aside-nav" className={customClassName}>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </Aside.Nav>
    );
    const navElement = getByTestId("aside-nav");
    expect(navElement).toBeInTheDocument();
    expect(navElement).toHaveClass(customClassName);
  });
});

describe("Aside.NavItem", () => {
  it("renders children correctly", () => {
    const { getByTestId } = render(
      <Router>
        <Aside.NavItem
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

  it("applies the default class name 'asideNavItem'", () => {
    const { getByTestId } = render(
      <Router>
        <Aside.NavItem
          testId="aside-nav-item"
          icon={<span>Icon</span>}
          text="Text"
          link="/"
        />
      </Router>
    );
    const navItemElement = getByTestId("aside-nav-item");
    expect(navItemElement).toBeInTheDocument();
    expect(navItemElement).toHaveClass("asideNavItem");
  });

  it("applies the provided class name", () => {
    const customClassName = "custom-aside";
    const { getByTestId } = render(
      <Router>
        <Aside.NavItem
          testId="aside-nav-item"
          icon={<span>Icon</span>}
          text="Text"
          link="/"
          className={customClassName}
        />
      </Router>
    );
    const navItemElement = getByTestId("aside-nav-item");
    expect(navItemElement).toBeInTheDocument();
    expect(navItemElement).toHaveClass(customClassName);
  });
});
