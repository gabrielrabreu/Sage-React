import { Meta, StoryObj } from "@storybook/react";

import Footer from "./Footer";

import styles from "./Footer.module.scss";

const meta: Meta<typeof Footer> = {
  title: "Sage/Footer",
  component: Footer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Example: Story = {
  args: {
    children: "© 2024 Sage. All rights reserved.",
    className: styles.storybook,
    testId: "sage-footer",
  },
};
