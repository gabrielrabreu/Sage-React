import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  it("renders correctly with text content", () => {
    const textContent = "Click me";
    const { getByTestId } = render(<Button text={textContent} />);
    const buttonElement = getByTestId("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(textContent);
  });

  it("executes onClick function when clicked", () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Button text="Click me" onClick={handleClick} />
    );
    const buttonElement = getByTestId("button");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
