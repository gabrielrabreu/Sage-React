import React from "react";
import { render } from "@testing-library/react";

import Icon from "./Icon";

describe("Icon", () => {
  it("renders Lucide icon based on provided name", () => {
    const { getByTestId } = render(<Icon name="Bell" testId="icon-bell" />);
    const icon = getByTestId("icon-bell");
    expect(icon).toBeInTheDocument();
  });

  it("applies the default class name 'icon'", () => {
    const { getByTestId } = render(<Icon name="Bell" testId="icon-bell" />);
    const icon = getByTestId("icon-bell");
    expect(icon).toHaveClass("icon");
  });

  it("applies the provided class name", () => {
    const customClassName = "custom-icon";
    const { getByTestId } = render(
      <Icon name="Bell" className={customClassName} testId="icon-bell" />
    );
    const icon = getByTestId("icon-bell");
    expect(icon).toHaveClass(customClassName);
  });
});
