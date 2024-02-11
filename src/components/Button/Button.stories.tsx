import { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Sage/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
    onClick: { action: "onClick" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Example: Story = {
  args: {
    text: "Click me",
  },
};
