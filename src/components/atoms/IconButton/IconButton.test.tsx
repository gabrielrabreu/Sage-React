import React from "react";
import { render, fireEvent } from "@testing-library/react";

import IconButton from "./IconButton";
import Icon from "../Icon/Icon";

describe("IconButton", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<IconButton icon={<Icon name="Bell" />} />);
    const buttonElement = getByTestId("icon-button");
    const iconElement = getByTestId("icon");
    expect(buttonElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  it("executes onClick function when clicked", () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <IconButton icon={<Icon name="Bell" />} onClick={handleClick} />
    );
    const buttonElement = getByTestId("icon-button");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
