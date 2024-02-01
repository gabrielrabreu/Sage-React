import { Meta, StoryObj } from "@storybook/react";

import ToggleSwitch from "./ToggleSwitch";

const meta: Meta<typeof ToggleSwitch> = {
  title: "Sage/ToggleSwitch",
  component: ToggleSwitch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    onChange: { action: "onChange" },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
    onChange() {},
  },
};

export const NotChecked: Story = {
  args: {
    checked: false,
    onChange() {},
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
