import { Meta, StoryObj } from "@storybook/react";

import Label from "./Label";

const meta: Meta<typeof Label> = {
  title: "Sage/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    htmlFor: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Example: Story = {
  args: {
    text: "Name",
    htmlFor: "name",
  },
};
