import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import Popover from "./Popover";

const meta: Meta<typeof Popover> = {
  title: "Sage/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    content: { control: "text" },
    children: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    content: "Popover content",
    children: <button>Hover over me</button>,
  },
};
