import React from "react";
import { render, fireEvent } from "@testing-library/react";

import IconButton from "./IconButton";
import Icon from "../Icon/Icon";

describe("IconButton", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(
      <IconButton
        icon={<Icon name="Bell" testId="icon-bell" />}
        testId="icon-button"
      />
    );
    const buttonElement = getByTestId("icon-button");
    const iconElement = getByTestId("icon-bell");
    expect(buttonElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  it("executes onClick function when clicked", () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <IconButton
        icon={<Icon name="Bell" />}
        onClick={handleClick}
        testId="icon-button"
      />
    );
    const buttonElement = getByTestId("icon-button");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies the default class name 'iconButton'", () => {
    const { getByTestId } = render(
      <IconButton icon={<Icon name="Bell" />} testId="icon-button" />
    );
    const footerElement = getByTestId("icon-button");
    expect(footerElement).toHaveClass("iconButton");
  });

  it("applies the provided class name", () => {
    const customClassName = "custom-icon-button";
    const { getByTestId } = render(
      <IconButton
        icon={<Icon name="Bell" />}
        testId="icon-button"
        className={customClassName}
      />
    );
    const footerElement = getByTestId("icon-button");
    expect(footerElement).toHaveClass(customClassName);
  });
});
