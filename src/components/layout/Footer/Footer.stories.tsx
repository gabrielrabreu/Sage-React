import { Meta, StoryObj } from "@storybook/react";

import Footer from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "layout/Footer",
  component: Footer,
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Example: Story = {
  args: {
    children: "© 2024 Sage. All rights reserved.",
  },
};
