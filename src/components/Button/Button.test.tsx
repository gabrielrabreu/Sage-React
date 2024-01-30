import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { composeStory } from "@storybook/react";

import meta, { Default, WithDisabled } from "./Button.stories";

const ButtonDefault = composeStory(Default, meta);
const ButtonWithDisabled = composeStory(WithDisabled, meta);

describe("Button component", () => {
  test("renders button with label correctly", () => {
    const { getByText } = render(ButtonDefault());

    expect(getByText("Default")).toBeInTheDocument();
  });

  test("calls onClick callback when button is clicked", () => {
    const onClickMock = jest.fn();

    const { getByText } = render(ButtonDefault({ onClick: onClickMock }));

    fireEvent.click(getByText("Default"));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test("disables button when disabled prop is true", () => {
    const { getByText } = render(ButtonWithDisabled());

    const button = getByText("With Disabled");
    expect(button).toBeDisabled();
  });

  test("button is enabled by default", () => {
    const { getByText } = render(ButtonDefault());

    const button = getByText("Default");
    expect(button).toBeEnabled();
  });
});
