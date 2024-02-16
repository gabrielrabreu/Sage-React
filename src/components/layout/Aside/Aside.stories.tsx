import { Meta, StoryObj } from "@storybook/react";

import Aside from "./Aside";

const meta: Meta<typeof Aside> = {
  title: "layout/Aside",
  component: Aside,
};

export default meta;

type Story = StoryObj<typeof Aside>;

export const Default: Story = {
  args: {
    hidden: false,
    children: "Aside",
  },
};
