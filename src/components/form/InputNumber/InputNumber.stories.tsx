import { Meta, StoryObj } from "@storybook/react";

import InputNumber from "./InputNumber";

const meta: Meta<typeof InputNumber> = {
  title: "form/InputNumber",
  component: InputNumber,
  argTypes: {
    onChange: { action: "onChange" },
  },
};

export default meta;

type Story = StoryObj<typeof InputNumber>;

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

export const MinAndMax: Story = {
  args: {
    min: 1,
    max: 10,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
