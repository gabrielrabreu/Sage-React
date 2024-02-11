import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Decorator, Meta, StoryObj } from "@storybook/react";

import { Icon } from "../../atoms";
import Sidebar from "./Sidebar";

const reactRouterDecorator: Decorator = (Story) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/*" element={<Story />} />
      </Routes>
    </MemoryRouter>
  );
};

const meta: Meta<typeof Sidebar> = {
  title: "Molecules/Sidebar",
  component: Sidebar,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    headings: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [reactRouterDecorator],
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Example: Story = {
  args: {
    headings: [
      {
        items: [
          {
            icon: <Icon name="Bell" />,
            name: "Bell",
            link: "/bell",
          },
          {
            icon: <Icon name="Mail" />,
            name: "Mail",
            link: "/mail",
          },
        ],
      },
      {
        name: "Others",
        items: [
          {
            icon: <Icon name="HelpCircle" />,
            name: "Help",
            link: "/help",
          },
          {
            icon: <Icon name="User" />,
            name: "User",
            link: "/user",
          },
        ],
      },
    ],
  },
};
