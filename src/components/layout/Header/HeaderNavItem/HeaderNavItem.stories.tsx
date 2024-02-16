import { Meta, StoryObj } from "@storybook/react";

import HeaderNavItem from "./HeaderNavItem";

const meta: Meta<typeof HeaderNavItem> = {
  title: "layout/Header/HeaderNavItem",
  component: HeaderNavItem,
};

export default meta;

type Story = StoryObj<typeof HeaderNavItem>;

export const Example: Story = {
  args: {
    children: "HeaderNavItem",
  },
};
