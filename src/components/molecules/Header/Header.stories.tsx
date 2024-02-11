import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Icon } from "../../atoms";
import Header from "./Header";

const meta: Meta<typeof Header> = {
  title: "Molecules/Header",
  component: Header,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    showMenuButton: {
      control: {
        type: "boolean",
      },
    },
    onMenuButtonClick: { action: "Menu clicked" },
    name: {
      control: {
        type: "text",
      },
    },
    actions: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Example: Story = {
  args: {
    showMenuButton: true,
    name: "SAGE",
    actions: [
      {
        icon: <Icon name="Home" />,
        onClick: action("Home clicked"),
      },
      {
        icon: <Icon name="Bell" />,
        onClick: action("Bell clicked"),
      },
      {
        icon: <Icon name="Mail" />,
        onClick: action("Mail clicked"),
      },
    ],
  },
};
