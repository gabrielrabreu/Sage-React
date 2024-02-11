import { Meta, StoryObj } from "@storybook/react";

import Footer from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Molecules/Footer",
  component: Footer,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: {
        type: "text",
      },
    },
    year: {
      control: {
        type: "number",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Example: Story = {
  args: {
    name: "Sage",
    year: 2024,
  },
};
