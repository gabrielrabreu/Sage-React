import { Meta, StoryObj } from "@storybook/react";

import CardTitle from "./CardTitle";

const meta: Meta<typeof CardTitle> = {
  title: "layout/Card/CardTitle",
  component: CardTitle,
};

export default meta;

type Story = StoryObj<typeof CardTitle>;

export const Example: Story = {
  args: {
    children: "Card",
  },
};
