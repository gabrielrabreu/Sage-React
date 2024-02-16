import { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "form/InputNumber",
  component: Input,
  argTypes: {
    onChange: { action: "onChange" },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Example: Story = {};

export const Value: Story = {
  args: {
    value: 35,
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: "A placeholder",
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
