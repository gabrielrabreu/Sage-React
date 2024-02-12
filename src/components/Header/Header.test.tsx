import React from "react";
import { render } from "@testing-library/react";

import Header from "./Header";

describe("Header", () => {
  it("renders children correctly", () => {
    const { getByTestId } = render(
      <Header testId="header">
        <p>Hello World</p>
      </Header>
    );
    const headerElement = getByTestId("header");
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent("Hello World");
  });

  it("applies the default class name 'header'", () => {
    const { getByTestId } = render(
      <Header testId="header">
        <p>Hello World</p>
      </Header>
    );
    const headerElement = getByTestId("header");
    expect(headerElement).toHaveClass("header");
  });

  it("applies the provided class name", () => {
    const customClassName = "custom-header";
    const { getByTestId } = render(
      <Header className={customClassName} testId="header">
        <p>Hello World</p>
      </Header>
    );
    const headerElement = getByTestId("header");
    expect(headerElement).toHaveClass(customClassName);
  });
});

describe("Header.Nav", () => {
  it("renders children correctly", () => {
    const { getByTestId } = render(
      <Header.Nav testId="nav">
        <li>Item 1</li>
        <li>Item 2</li>
      </Header.Nav>
    );
    const navElement = getByTestId("nav");
    expect(navElement).toBeInTheDocument();
    expect(navElement).toHaveTextContent("Item 1");
    expect(navElement).toHaveTextContent("Item 2");
  });

  it("applies the default class name 'headerNav'", () => {
    const { getByTestId } = render(
      <Header.Nav testId="nav">
        <li>Item 1</li>
        <li>Item 2</li>
      </Header.Nav>
    );
    const navElement = getByTestId("nav");
    expect(navElement).toHaveClass("headerNav");
  });

  it("applies the provided class name", () => {
    const customClassName = "custom-nav";
    const { getByTestId } = render(
      <Header.Nav className={customClassName} testId="nav">
        <li>Item 1</li>
        <li>Item 2</li>
      </Header.Nav>
    );
    const navElement = getByTestId("nav");
    expect(navElement).toHaveClass(customClassName);
  });
});

describe("Header.NavItem", () => {
  it("renders children correctly", () => {
    const { getByTestId } = render(
      <Header.NavItem testId="nav-item">Item</Header.NavItem>
    );
    const navItemElement = getByTestId("nav-item");
    expect(navItemElement).toBeInTheDocument();
    expect(navItemElement).toHaveTextContent("Item");
  });

  it("applies the default class name 'headerNavItem'", () => {
    const { getByTestId } = render(
      <Header.NavItem testId="nav-item">Item</Header.NavItem>
    );
    const navItemElement = getByTestId("nav-item");
    expect(navItemElement).toBeInTheDocument();
    expect(navItemElement).toHaveClass("headerNavItem");
  });

  it("applies the provided class name", () => {
    const customClassName = "custom-header";
    const { getByTestId } = render(
      <Header.NavItem className={customClassName} testId="nav-item">
        Item
      </Header.NavItem>
    );
    const navItemElement = getByTestId("nav-item");
    expect(navItemElement).toBeInTheDocument();
    expect(navItemElement).toHaveClass(customClassName);
  });
});
