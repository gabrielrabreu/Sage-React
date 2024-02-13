import React from "react";
import { render } from "@testing-library/react";

import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage Component", () => {
  it("renders error message when message prop is provided", () => {
    const errorMessage = "This is an error message";
    const testId = "test-error-message";

    const { getByTestId } = render(
      <ErrorMessage message={errorMessage} testId={testId} />
    );

    const errorMessageElement = getByTestId(testId);
    expect(errorMessageElement).toBeInTheDocument();
    expect(errorMessageElement).toHaveTextContent(errorMessage);
  });

  it("does not render when message prop is not provided", () => {
    const { queryByTestId } = render(<ErrorMessage />);
    expect(queryByTestId("test-error-message")).toBeNull();
  });

  it("applies custom class name", () => {
    const errorMessage = "This is an error message";
    const testId = "test-error-message";
    const customClassName = "custom-error-message";

    const { getByTestId } = render(
      <ErrorMessage
        message={errorMessage}
        className={customClassName}
        testId={testId}
      />
    );

    const errorMessageElement = getByTestId(testId);
    expect(errorMessageElement).toHaveClass(customClassName);
  });
});
