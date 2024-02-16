import { Meta, StoryObj } from "@storybook/react";

import AsideNav from "./AsideNav";

const meta: Meta<typeof AsideNav> = {
  title: "layout/Aside/AsideNav",
  component: AsideNav,
};

export default meta;

type Story = StoryObj<typeof AsideNav>;

export const Default: Story = {
  args: {
    children: "List",
  },
};
