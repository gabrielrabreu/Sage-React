import { Meta, StoryObj } from "@storybook/react";

import ErrorMessage from "./ErrorMessage";

const meta: Meta<typeof ErrorMessage> = {
  title: "Sage/ErrorMessage",
  component: ErrorMessage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    message: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof ErrorMessage>;

export const Example: Story = {
  args: {
    message: "Field is required",
  },
};
