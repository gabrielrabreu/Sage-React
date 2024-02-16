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

  it("applies the default class name", () => {
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
