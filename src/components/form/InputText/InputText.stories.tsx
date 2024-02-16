import { Meta, StoryObj } from "@storybook/react";

import InputText from "./InputText";

const meta: Meta<typeof InputText> = {
  title: "form/InputText",
  component: InputText,
  argTypes: {
    onChange: { action: "onChange" },
  },
};

export default meta;

type Story = StoryObj<typeof InputText>;

export const Example: Story = {};

export const Value: Story = {
  args: {
    value: "A value",
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: "A placeholder",
  },
};

export const MaxLength: Story = {
  args: {
    maxLength: 5,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
