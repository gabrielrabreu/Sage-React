import React from "react";
import { render } from "@testing-library/react";

import Card from "./Card";

describe("Card", () => {
  it("renders children correctly", () => {
    const { getByTestId } = render(<Card testId="card">Hello, World!</Card>);
    const cardElement = getByTestId("card");
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveTextContent("Hello, World!");
  });

  it("applies the default class name 'card'", () => {
    const { getByTestId } = render(<Card testId="card">Hello, World!</Card>);
    const cardElement = getByTestId("card");
    expect(cardElement).toHaveClass("card");
  });

  it("applies the provided class name", () => {
    const customClassName = "custom-card";
    const { getByTestId } = render(
      <Card className={customClassName} testId="card">
        Hello, World!
      </Card>
    );
    const cardElement = getByTestId("card");
    expect(cardElement).toHaveClass(customClassName);
  });
});

describe("Card.Title", () => {
  it("renders children correctly", () => {
    const { getByTestId } = render(
      <Card.Title testId="card-title">Title</Card.Title>
    );
    const cardTitleElement = getByTestId("card-title");
    expect(cardTitleElement).toBeInTheDocument();
    expect(cardTitleElement).toHaveTextContent("Title");
  });

  it("applies the default class name 'cardTitle'", () => {
    const { getByTestId } = render(
      <Card.Title testId="card-title">Title</Card.Title>
    );
    const cardTitleElement = getByTestId("card-title");
    expect(cardTitleElement).toHaveClass("cardTitle");
  });

  it("applies the provided class name", () => {
    const customClassName = "custom-card-title";
    const { getByTestId } = render(
      <Card.Title className={customClassName} testId="card-title">
        Title
      </Card.Title>
    );
    const cardTitleElement = getByTestId("card-title");
    expect(cardTitleElement).toHaveClass(customClassName);
  });
});
