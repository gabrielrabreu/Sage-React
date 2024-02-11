import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Decorator, Meta, StoryObj } from "@storybook/react";

import Breadcrumb from "./Breadcrumb";

const reactRouterDecorator: Decorator = (Story) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/*" element={<Story />} />
      </Routes>
    </MemoryRouter>
  );
};

const meta: Meta<typeof Breadcrumb> = {
  title: "Organism/Breadcrumb",
  component: Breadcrumb,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    items: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [reactRouterDecorator],
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Example: Story = {
  args: {
    items: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Products",
        link: "/products",
      },
      {
        name: "Details",
        link: "/details",
      },
    ],
  },
};
