import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { composeStory } from "@storybook/react";

import meta, {
  Default,
  Value,
  Placeholder,
  MaxLength,
  Disabled,
} from "./InputText.stories";

const InputTextDefault = composeStory(Default, meta);
const InputTextValue = composeStory(Value, meta);
const InputTextPlaceholder = composeStory(Placeholder, meta);
const InputTextMaxLength = composeStory(MaxLength, meta);
const InputTextDisabled = composeStory(Disabled, meta);

describe("InputText component", () => {
  test("renders input text correctly", () => {
    const { getByTestId } = render(InputTextDefault());

    const input = getByTestId("input-text");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });

  test("calls onChange callback when input value changes", () => {
    const onChangeMock = jest.fn();

    const { getByTestId } = render(
      InputTextDefault({ onChange: onChangeMock })
    );

    const input = getByTestId("input-text");
    fireEvent.change(input, { target: { value: "New value" } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith("New value");
  });

  test("disables input when disabled prop is true", () => {
    const { getByTestId } = render(InputTextDisabled());

    const input = getByTestId("input-text");
    expect(input).toBeDisabled();
  });

  test("input is enabled by default", () => {
    const { getByTestId } = render(InputTextDefault());

    const input = getByTestId("input-text");
    expect(input).toBeEnabled();
  });

  test("sets value correctly", () => {
    const { getByTestId } = render(InputTextValue());

    const input = getByTestId("input-text");
    expect(input).toHaveAttribute("value", "A value");
  });

  test("sets placeholder correctly", () => {
    const { getByTestId } = render(InputTextPlaceholder());

    const input = getByTestId("input-text");
    expect(input).toHaveAttribute("placeholder", "A placeholder");
  });

  test("sets maxLength correctly", () => {
    const { getByTestId } = render(InputTextMaxLength());

    const input = getByTestId("input-text");
    expect(input).toHaveAttribute("maxLength", "5");
  });
});
