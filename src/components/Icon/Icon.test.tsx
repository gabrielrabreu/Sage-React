import React from "react";
import { render } from "@testing-library/react";

import Icon from "./Icon";

describe("Icon", () => {
  it("renders Lucide icon based on provided name", () => {
    const { getByTestId } = render(<Icon name="Bell" />);
    const icon = getByTestId("icon-Bell");
    expect(icon).toBeInTheDocument();
  });

  it("applies custom class to rendered icon", () => {
    const { getByTestId } = render(<Icon name="Bell" />);
    const icon = getByTestId("icon-Bell");
    expect(icon).toHaveClass("icon");
  });
});
