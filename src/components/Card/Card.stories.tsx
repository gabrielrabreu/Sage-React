import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Sage/Card",
  component: Card,
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

type Story = StoryObj<typeof Card>;

export const Example: Story = {
  args: {
    children: "Card",
  },
};

export const Title: Story = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: <Card.Title>Card Title</Card.Title>,
  },
};
