import React from "react";
import { render } from "@testing-library/react";

import Footer from "./Footer";

describe("Footer Component", () => {
  it("renders children correctly", () => {
    const { getByTestId } = render(
      <Footer testId="footer">
        &copy; 2024 Your Company. All rights reserved.
      </Footer>
    );
    const footerElement = getByTestId("footer");
    expect(footerElement).toBeInTheDocument();
    expect(footerElement.textContent).toContain(
      "© 2024 Your Company. All rights reserved."
    );
  });

  it("applies the default class name", () => {
    const { getByTestId } = render(
      <Footer testId="footer">
        &copy; 2024 Your Company. All rights reserved.
      </Footer>
    );
    const footerElement = getByTestId("footer");
    expect(footerElement).toHaveClass("footer");
  });

  it("applies the provided class name", () => {
    const customClassName = "custom-footer";
    const { getByTestId } = render(
      <Footer className={customClassName} testId="footer">
        &copy; 2024 Your Company. All rights reserved.
      </Footer>
    );
    const footerElement = getByTestId("footer");
    expect(footerElement).toHaveClass(customClassName);
  });
});
