import { Meta, StoryObj } from "@storybook/react";

import Icon from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Sage/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Example: Story = {
  args: {
    name: "Home",
  },
};
