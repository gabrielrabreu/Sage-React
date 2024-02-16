import { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "layout/Card",
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Example: Story = {
  args: {
    children: "Card",
  },
};
