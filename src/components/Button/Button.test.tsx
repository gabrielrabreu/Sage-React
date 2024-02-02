import { render, fireEvent } from "@testing-library/react";
import { composeStory } from "@storybook/react";

import meta, { Default, Disabled } from "./Button.stories";

const ButtonDefault = composeStory(Default, meta);
const ButtonDisabled = composeStory(Disabled, meta);

describe("Button component", () => {
  test("renders button with label correctly", () => {
    const { getByTestId } = render(ButtonDefault());

    const button = getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Default");
  });

  test("calls onClick callback when button is clicked", () => {
    const onClickMock = jest.fn();

    const { getByTestId } = render(ButtonDefault({ onClick: onClickMock }));

    const button = getByTestId("button");
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test("disables button when disabled prop is true", () => {
    const { getByTestId } = render(ButtonDisabled());

    const button = getByTestId("button");
    expect(button).toBeDisabled();
  });

  test("button is enabled by default", () => {
    const { getByTestId } = render(ButtonDefault());

    const button = getByTestId("button");
    expect(button).toBeEnabled();
  });
});
