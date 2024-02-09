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
  title: "Sage/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [reactRouterDecorator],
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: [
      { name: "Home", link: "/home" },
      { name: "Products", link: "/products" },
      { name: "Details", link: "/details" },
    ],
  },
};
