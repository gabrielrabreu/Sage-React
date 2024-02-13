import React from "react";
import { render } from "@testing-library/react";

import Label from "./Label";

describe("Label", () => {
  it("renders label with correct text and htmlFor attribute", () => {
    const htmlFor = "testInput";
    const labelText = "Test Label";
    const testId = "test-label";

    const { getByTestId } = render(
      <Label htmlFor={htmlFor} text={labelText} testId={testId} />
    );

    const labelElement = getByTestId(testId);
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveTextContent(labelText);
    expect(labelElement).toHaveAttribute("for", htmlFor);
  });

  it("applies custom class name", () => {
    const htmlFor = "testInput";
    const labelText = "Test Label";
    const testId = "test-label";
    const customClassName = "custom-label";

    const { getByTestId } = render(
      <Label
        htmlFor={htmlFor}
        text={labelText}
        className={customClassName}
        testId={testId}
      />
    );

    const labelElement = getByTestId(testId);
    expect(labelElement).toHaveClass(customClassName);
  });
});
