import { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "ui/Button",
  component: Button,
  argTypes: {
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
