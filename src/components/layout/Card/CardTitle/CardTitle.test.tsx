import React from "react";
import { render } from "@testing-library/react";

import CardTitle from "./CardTitle";

describe("CardTitle", () => {
  it("renders children correctly", () => {
    const { getByTestId } = render(
      <CardTitle testId="card-title">Title</CardTitle>
    );
    const cardTitleElement = getByTestId("card-title");
    expect(cardTitleElement).toBeInTheDocument();
    expect(cardTitleElement).toHaveTextContent("Title");
  });

  it("applies the default class name", () => {
    const { getByTestId } = render(
      <CardTitle testId="card-title">Title</CardTitle>
    );
    const cardTitleElement = getByTestId("card-title");
    expect(cardTitleElement).toHaveClass("cardTitle");
  });

  it("applies the provided class name", () => {
    const customClassName = "custom-card-title";
    const { getByTestId } = render(
      <CardTitle className={customClassName} testId="card-title">
        Title
      </CardTitle>
    );
    const cardTitleElement = getByTestId("card-title");
    expect(cardTitleElement).toHaveClass(customClassName);
  });
});
