import { render, fireEvent } from "@testing-library/react";
import { composeStory } from "@storybook/react";

import meta, { Default } from "./Popover.stories";

const PopoverDefault = composeStory(Default, meta);

describe("Popover component", () => {
  test("renders popover correctly", () => {
    const { getByTestId } = render(PopoverDefault());

    const popoverContent = getByTestId("popover-content");
    expect(popoverContent).not.toHaveClass("popover-content-visible");

    const trigger = getByTestId("popover-trigger");
    fireEvent.mouseEnter(trigger);

    expect(popoverContent).toHaveClass("popover-content-visible");

    fireEvent.mouseLeave(trigger);
    expect(popoverContent).not.toHaveClass("popover-content-visible");
  });
});
