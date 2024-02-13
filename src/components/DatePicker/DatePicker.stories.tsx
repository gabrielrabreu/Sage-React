import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import DatePicker from "./DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "Sage/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: { control: "date" },
    onChange: { action: "onChange" },
  },
  render: (args) => (
    <DatePicker
      {...args}
      value={args.value ? new Date(args.value) : undefined}
    ></DatePicker>
  ),
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Example: Story = {};

export const Value: Story = {
  args: {
    value: new Date(),
  },
};
