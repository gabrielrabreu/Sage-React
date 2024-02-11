import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import IconButton from "./IconButton";
import Icon from "../Icon/Icon";

const meta: Meta<typeof IconButton> = {
  title: "Sage/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: {
        type: "select",
      },
      options: ["Bell", "Menu", "Heart"],
      mapping: {
        Bell: <Icon name="Bell" />,
        Menu: <Icon name="Menu" />,
        Heart: <Icon name="Heart" />,
      },
    },
    onClick: { action: "onClick" },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Example: Story = {
  args: {
    icon: "Bell",
  },
};
