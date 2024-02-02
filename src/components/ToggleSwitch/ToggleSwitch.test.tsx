import { render, fireEvent } from "@testing-library/react";
import { composeStory } from "@storybook/react";

import meta, {
  Default,
  Checked,
  NotChecked,
  Disabled,
} from "./ToggleSwitch.stories";

const ToggleSwitchDefault = composeStory(Default, meta);
const ToggleSwitchChecked = composeStory(Checked, meta);
const ToggleSwitchNotChecked = composeStory(NotChecked, meta);
const ToggleSwitchDisabled = composeStory(Disabled, meta);

describe("ToggleSwitch component", () => {
  test("renders toggle switch correctly", () => {
    const { getByTestId } = render(ToggleSwitchDefault());

    const toggleSwitch = getByTestId("toggle-switch");
    expect(toggleSwitch).toBeInTheDocument();
  });

  test("calls onChange callback when toggle switch is clicked", () => {
    const onChangeMock = jest.fn();

    const { getByTestId } = render(
      ToggleSwitchDefault({ onChange: onChangeMock })
    );

    const toggleCheckbox = getByTestId("toggle-checkbox");
    fireEvent.click(toggleCheckbox);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  test("disables toggle switch when disabled prop is true", () => {
    const { getByTestId } = render(ToggleSwitchDisabled());

    const toggleCheckbox = getByTestId("toggle-checkbox");
    expect(toggleCheckbox).toBeDisabled();
  });

  test("toggle switch is enabled by default", () => {
    const { getByTestId } = render(ToggleSwitchDefault());

    const toggleCheckbox = getByTestId("toggle-checkbox");
    expect(toggleCheckbox).toBeEnabled();
  });

  test("toggle switch is checked by default when checked prop is true", () => {
    const { getByTestId } = render(ToggleSwitchChecked());

    const toggleCheckbox = getByTestId("toggle-checkbox");
    expect(toggleCheckbox).toBeChecked();
  });

  test("toggle switch is not checked by default when checked prop is false", () => {
    const { getByTestId } = render(ToggleSwitchNotChecked());

    const toggleCheckbox = getByTestId("toggle-checkbox");
    expect(toggleCheckbox).not.toBeChecked();
  });
});
