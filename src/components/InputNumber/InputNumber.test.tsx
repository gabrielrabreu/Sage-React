import { render, fireEvent } from "@testing-library/react";
import { composeStory } from "@storybook/react";

import meta, {
  Default,
  Value,
  Placeholder,
  MinAndMax,
  Disabled,
} from "./InputNumber.stories";

const InputNumberDefault = composeStory(Default, meta);
const InputNumberValue = composeStory(Value, meta);
const InputNumberPlaceholder = composeStory(Placeholder, meta);
const InputNumberMinAndMax = composeStory(MinAndMax, meta);
const InputNumberDisabled = composeStory(Disabled, meta);

describe("InputNumber component", () => {
  test("renders input number correctly", () => {
    const { getByTestId } = render(InputNumberDefault());

    const input = getByTestId("input-number");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "number");
  });

  test("calls onChange callback when input value changes", () => {
    const onChangeMock = jest.fn();

    const { getByTestId } = render(
      InputNumberDefault({ onChange: onChangeMock })
    );

    const input = getByTestId("input-number");
    fireEvent.change(input, { target: { value: "25" } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(25);
  });

  test("disables input when disabled prop is true", () => {
    const { getByTestId } = render(InputNumberDisabled());

    const input = getByTestId("input-number");
    expect(input).toBeDisabled();
  });

  test("input is enabled by default", () => {
    const { getByTestId } = render(InputNumberDefault());

    const input = getByTestId("input-number");
    expect(input).toBeEnabled();
  });

  test("sets value correctly", () => {
    const { getByTestId } = render(InputNumberValue());

    const input = getByTestId("input-number");
    expect(input).toHaveAttribute("value", "35");
  });

  test("sets placeholder correctly", () => {
    const { getByTestId } = render(InputNumberPlaceholder());

    const input = getByTestId("input-number");
    expect(input).toHaveAttribute("placeholder", "A placeholder");
  });

  test("sets min and max correctly", () => {
    const { getByTestId } = render(InputNumberMinAndMax());

    const input = getByTestId("input-number");
    expect(input).toHaveAttribute("min", "1");
    expect(input).toHaveAttribute("max", "10");
  });
});
