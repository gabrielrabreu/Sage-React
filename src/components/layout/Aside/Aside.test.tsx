import React from "react";
import { render } from "@testing-library/react";

import Aside from "./Aside";

describe("Aside", () => {
  it("renders children correctly", () => {
    const { getByTestId } = render(
      <Aside hidden={false} hiddenClassName="hidden" testId="aside">
        <p>Child Component</p>
      </Aside>
    );
    const asideElement = getByTestId("aside");
    expect(asideElement).toBeInTheDocument();
    expect(asideElement).toHaveTextContent("Child Component");
  });

  it("applies the default class name", () => {
    const { getByTestId } = render(
      <Aside hidden={false} hiddenClassName="hidden" testId="aside">
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
      <Aside hidden={true} hiddenClassName="hidden" testId="aside">
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
        hidden={false}
        hiddenClassName="hidden"
        className={customClassName}
        testId="aside"
      >
        <p>Child Component</p>
      </Aside>
    );
    const asideElement = getByTestId("aside");
    expect(asideElement).toHaveClass(customClassName);
  });
});
