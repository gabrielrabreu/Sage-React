import React from "react";
import { render } from "@testing-library/react";

import Footer from "./Footer";

describe("Footer", () => {
  it("renders correctly with name and year", () => {
    const name = "Your Company";
    const year = new Date().getFullYear();

    const { getByTestId } = render(<Footer name={name} year={year} />);

    const footerElement = getByTestId("footer");
    const typographyElement = getByTestId("typography");

    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveClass("footer");
    expect(typographyElement).toBeInTheDocument();
    expect(typographyElement).toHaveTextContent(
      `© ${year} ${name}. All rights reserved.`
    );
  });
});
